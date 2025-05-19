import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";
import BottomNav from "@/components/layout/BottomNav";

export const metadata: Metadata = {
  title: "Glimpse",
  description: "Learning Next.js 15",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <html lang="en" className="bg-stone-950 text-white">
        <body className="antialiased">
          <main className="w-full md:w-[80vw] lg:w-[60vw] xl:w-[40vw] mx-auto">
            <section>{children}</section>
            <BottomNav />
          </main>
        </body>
      </html>
      <Toaster position="top-right" duration={2000} richColors />
    </>
  );
}
