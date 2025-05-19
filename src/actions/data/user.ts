import { headers } from "next/headers";
import { connectDB } from "@/lib/db";
import { UserModel } from "@/models/user";

export const fetchUser = async () => {
  const userId = (await headers()).get("x-user-id");
  if (!userId) return null;

  await connectDB();
  const user: UserTypes | null = await UserModel.findById(userId);
  if (!user) return null;

  return user;
};
