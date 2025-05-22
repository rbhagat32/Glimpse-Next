import { BottomNav } from "@/components/layout/BottomNav";
import { fetchUser } from "@/actions/data/user";
import { UserProvider } from "@/contexts/UserContext";

export default async function HomeLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const user = await fetchUser();

  return (
    <UserProvider initialUser={user}>
      <main className="h-screen mx-auto max-w-screen-sm border-x border-zinc-700 flex flex-col">
        <section className="flex-1 overflow-y-auto">{children}</section>
        <BottomNav />
      </main>
    </UserProvider>
  );
}
