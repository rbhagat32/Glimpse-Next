"use client";

import { type FormState, loginAction } from "@/actions/login";
import { Button } from "@/components/ui/button";
import Input from "@/components/ui/input";
import Loader from "@/components/ui/loader";
import Link from "next/link";
import { useActionState, useEffect } from "react";
import { toast } from "sonner";

export default function LoginForm() {
  const initialState: FormState = { errors: {}, prevFormData: {} };
  const [state, formAction, isPending] = useActionState(loginAction, initialState);

  useEffect(() => {
    if (state.errors.username) {
      toast.error(state.errors.username);
    } else if (state.errors.password) {
      toast.error(state.errors.password);
    }
  }, [state.errors]);

  return (
    <form action={formAction} className="flex flex-col gap-6">
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Log In to your account</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Enter your credentials to login to your account
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <Input
          name="username"
          type="text"
          label="Username"
          defaultValue={state.prevFormData?.username}
        />
        <Input
          name="password"
          type="password"
          label="Password"
          defaultValue={state.prevFormData?.password}
        />
      </div>

      <Button type="submit" disabled={isPending}>
        {!isPending ? "Log In" : <Loader />}
      </Button>

      <div className="text-center text-sm">
        Don&apos;t have an account?{" "}
        <Link href={"/signup"} className="underline">
          Sign Up
        </Link>
      </div>
    </form>
  );
}
