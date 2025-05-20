import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Glimpse",
  description: "Learning Next.js 15",
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <html lang="en" className="bg-stone-950 text-white">
        <body className="antialiased">{children}</body>
      </html>
      <Toaster position="top-right" duration={2000} richColors />
    </>
  );
}
