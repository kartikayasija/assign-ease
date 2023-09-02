"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import React from "react";
import { redirect } from "next/navigation";

const Login : React.FC = () => {
  const { data: session } = useSession();

  if (session) {
    redirect('/')
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
