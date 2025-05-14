import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Glimpse - Auth",
  description: "Authentication pages for Glimpse",
};

export default function AuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main>
      <div>sdjhfgbsdhkjb</div>
      {children}
    </main>
  );
}
