import BottomNav from "@/components/layout/BottomNav";
import { fetchUser } from "@/actions/data/user";
import { UserProvider } from "@/contexts/UserContext";

export default async function HomeLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const user = await fetchUser();

  return (
    <main>
      <UserProvider initialUser={user}>
        <main className="w-full md:w-[80vw] lg:w-[60vw] xl:w-[40vw] mx-auto">
          <section>{children}</section>
          <BottomNav />
        </main>
      </UserProvider>
    </main>
  );
}
