import BottomNav from "@/components/layout/BottomNav";
import { fetchUser } from "@/actions/data/user";
import { UserProvider } from "@/contexts/UserContext";

export default async function HomeLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const user = await fetchUser();

  return (
    <main>
      <UserProvider initialUser={user}>
        <main className="mx-auto max-w-screen-sm border-x border-stone-700">
          <section>{children}</section>
          <BottomNav />
        </main>
      </UserProvider>
    </main>
  );
}
