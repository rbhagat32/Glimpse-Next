"use server";

import { signupSchema, type SignupSchema } from "@/schemas/signup";
import { connectDB } from "@/lib/db";
import { UserModel } from "@/models/user";
import { redirect } from "next/navigation";
import { createSession } from "@/lib/session";

export type FormState = {
  errors: Partial<Record<keyof SignupSchema, string>>;
  prevFormData?: {
    username?: string;
    email?: string;
    password?: string;
  };
};

const signupAction = async (_prevState: FormState, formData: FormData): Promise<FormState> => {
  const data = {
    username: formData.get("username") as string,
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const result = signupSchema.safeParse(data);

  if (!result.success) {
    const errors: FormState["errors"] = {};
    result.error.errors.forEach((err) => {
      const field = err.path[0] as keyof FormState["errors"];
      if (!errors[field]) errors[field] = err.message; // Avoid overwriting existing errors
    });
    return { errors, prevFormData: data };
  }

  await connectDB();
  const user = await UserModel.create(result.data);

  await createSession(user._id.toString());
  redirect("/");
};

export { signupAction };
