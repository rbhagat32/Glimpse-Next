"use server";

import { connectDB } from "@/lib/db";
import { UserModel } from "@/models/user";
import { redirect } from "next/navigation";

export type Errors = {
  name?: string;
  username?: string;
  email?: string;
  password?: string;
};

export type FormState = {
  errors: Errors;
  prevFormData?: {
    name?: string;
    username?: string;
    email?: string;
    password?: string;
  };
};

const signupAction = async (_prevState: FormState, formData: FormData): Promise<FormState> => {
  const name = formData.get("name") as string;
  const username = formData.get("username") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const errors: Errors = {};

  if (!name) errors.name = "Name is required";

  if (!username) errors.username = "Username is required";

  if (!email) errors.email = "Email is required";
  else if (!/\S+@\S+\.\S+/.test(email)) errors.email = "Email is invalid";

  if (!password) errors.password = "Password is required";
  else if (password.length < 6) errors.password = "Password must be at least 6 characters long";
  else if (password.length > 20) errors.password = "Password must be at most 20 characters long";
  else if (!/[a-zA-Z]/.test(password))
    errors.password = "Password must contain at least one letter";
  else if (!/\d/.test(password)) errors.password = "Password must contain at least one number";
  else if (!/[!@#$%^&*]/.test(password))
    errors.password = "Password must contain at least one special character";

  if (Object.keys(errors).length > 0)
    return { errors, prevFormData: { name, username, email, password } };

  await connectDB();
  const newUser = await UserModel.create({ name, username, email, password });
  console.log("New user created:", newUser);

  redirect("/");
};

export { signupAction };
