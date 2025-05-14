"use server";

import { z } from "zod";
import { signupSchema } from "@/schemas/signup";
import { connectDB } from "@/lib/db";
import { UserModel } from "@/models/user";
import { redirect } from "next/navigation";

export type FormState = {
  errors: Partial<Record<keyof z.infer<typeof signupSchema>, string>>;
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
  await UserModel.create(result.data);

  redirect("/");
};

export { signupAction };
