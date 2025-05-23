import type { Metadata } from "next";
import Image from "next/image";
import { Flame } from "lucide-react";

export const metadata: Metadata = {
  title: "Glimpse - Auth",
  description: "Authentication pages for Glimpse",
};

export default function AuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main>
      <div className="grid min-h-svh lg:grid-cols-2">
        <div className="relative hidden bg-muted lg:block">
          <Image
            src="/auth.jpeg"
            alt="Cover_SignUp"
            width={2560}
            height={2048}
            priority
            className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.5]"
          />
        </div>
        <div className="flex flex-col gap-4 p-6 md:p-10">
          <div className="flex justify-center gap-2 md:justify-start">
            <div className="flex items-center gap-2 font-medium underline">
              <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <Flame className="size-6" />
              </div>
              Glimpse.
            </div>
          </div>
          <div className="flex flex-1 items-center justify-center">
            <div className="w-full max-w-xs">{children}</div>
          </div>
        </div>
      </div>
    </main>
  );
}
