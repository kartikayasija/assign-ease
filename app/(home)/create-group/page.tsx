"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

export default function LoginForm() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const form = useForm({
    defaultValues: {
      groupName: "",
    },
  });

  const onSubmit = async ({ groupName }: { groupName: string }) => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:3000/api/group", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: groupName }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.Error);
      }
      const user = await response.json();
    } catch (err) {
      console.log(err);
      if (err instanceof Error) {
        toast({ title: "Unable to create group", description: err.message });
      } else {
        toast({ title: "Unable to create group" });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full">
      <div>
        <h1 className="text-5xl font-bold p-12">New Group</h1>
      </div>
      <div className="w-76 px-28 flex justify-center">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-14 flex flex-col"
          >
            <FormField
              control={form.control}
              name="groupName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xl">Group Name</FormLabel>
                  <FormControl>
                    <Input placeholder="name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Validating..." : "Create"}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
