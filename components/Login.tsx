"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import React from "react";

const Login : React.FC = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className="flex justify-end items-center mr-1">
        <h5 className="mr-2">{session?.user?.name}</h5>
        <Button onClick={() => signOut()}>Sign Out</Button>
      </div>
    );
  }
  return (
    <div className="flex justify-end items-center mr-1">
      <Button className="flex justify-end ml-auto" onClick={() => signIn()}>
        Sign In
      </Button>
    </div>
  );
};
export default Login;
