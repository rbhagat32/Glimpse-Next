"use client";

import { type FormState, signupAction } from "@/actions/signup";
import { useActionState } from "react";

export function SignUpForm() {
  const initialState: FormState = { errors: {}, prevFormData: {} };
  const [state, formAction, isPending] = useActionState(signupAction, initialState);

  return (
    <form action={formAction}>
      <div>
        <label>
          Name:
          <input name="name" type="text" defaultValue={state.prevFormData?.name || ""} />
        </label>
        {state.errors.name && <span>{state.errors.name}</span>}
      </div>

      <div>
        <label>
          Username:
          <input name="username" type="text" defaultValue={state.prevFormData?.username || ""} />
        </label>
        {state.errors.username && <span>{state.errors.username}</span>}
      </div>

      <div>
        <label>
          Email:
          <input name="email" type="email" defaultValue={state.prevFormData?.email || ""} />
        </label>
        {state.errors.email && <span>{state.errors.email}</span>}
      </div>

      <div>
        <label>
          Password:
          <input
            name="password"
            type="password"
            defaultValue={state.prevFormData?.password || ""}
          />
        </label>
        {state.errors.password && <span>{state.errors.password}</span>}
      </div>

      <button type="submit" disabled={isPending}>
        Sign Up
      </button>
    </form>
  );
}
