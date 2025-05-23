"use client";

import { type FormState, signupAction } from "@/actions/auth/signup";
import { Button } from "@/components/ui/button";
import Input from "@/components/ui/input";
import Loader from "@/components/ui/loader";
import Link from "next/link";
import { useActionState, useEffect } from "react";
import { toast } from "sonner";

export default function SignUpForm() {
  const initialState: FormState = { errors: {}, prevFormData: {} };
  const [state, formAction, isPending] = useActionState(signupAction, initialState);

  useEffect(() => {
    if (state.errors.username) {
      toast.error(state.errors.username);
    } else if (state.errors.email) {
      toast.error(state.errors.email);
    } else if (state.errors.password) {
      toast.error(state.errors.password);
    }
  }, [state.errors]);

  return (
    <form action={formAction} className="flex flex-col gap-6">
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Sign Up to create account</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Enter your credentials to create a new account
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <Input
          name="username"
          type="text"
          label="Username"
          defaultValue={state.prevFormData?.username}
        />
        <Input name="email" type="email" label="Email" defaultValue={state.prevFormData?.email} />
        <Input
          name="password"
          type="password"
          label="Password"
          defaultValue={state.prevFormData?.password}
        />
      </div>

      <Button type="submit" disabled={isPending}>
        {!isPending ? "Sign Up" : <Loader />}
      </Button>

      <div className="text-center text-sm">
        Already have an account?{" "}
        <Link href={"/login"} className="underline">
          Log in
        </Link>
      </div>
    </form>
  );
}
