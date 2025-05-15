import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Glimpse",
  description: "Beginner Next.js 15 Project",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <html lang="en">
        <body className="antialiased">{children}</body>
      </html>
      <Toaster position="top-right" duration={2000} richColors />
    </>
  );
}
