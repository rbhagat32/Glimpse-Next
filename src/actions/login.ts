"use server";

import { loginSchema, type LoginSchema } from "@/schemas/login";
import { connectDB } from "@/lib/db";
import { UserModel } from "@/models/user";
import { redirect } from "next/navigation";
import { createSession } from "@/lib/session";

export type FormState = {
  errors: Partial<Record<keyof LoginSchema, string>>;
  prevFormData?: {
    username?: string;
    password?: string;
  };
};

const loginAction = async (_prevState: FormState, formData: FormData): Promise<FormState> => {
  const data = {
    username: formData.get("username") as string,
    password: formData.get("password") as string,
  };

  const result = loginSchema.safeParse(data);

  if (!result.success) {
    const errors: FormState["errors"] = {};
    result.error.errors.forEach((err) => {
      const field = err.path[0] as keyof FormState["errors"];
      if (!errors[field]) errors[field] = err.message; // Avoid overwriting existing errors
    });
    return { errors, prevFormData: data };
  }

  await connectDB();
  const user: UserTypes = await UserModel.findOne({ username: data.username }).select("+password");

  if (!user) return { errors: { username: "Invalid credentials !" }, prevFormData: data };

  const checkPassword = await user.matchPassword(data.password);
  if (!checkPassword) return { errors: { password: "Invalid credentials !" }, prevFormData: data };

  await createSession(user._id.toString());
  redirect("/");
};

export { loginAction };
