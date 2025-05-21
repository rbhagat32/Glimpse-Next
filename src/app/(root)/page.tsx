import { logout } from "@/actions/auth/logout";
import Stories from "@/components/layout/Stories";
import { Heart, LogOut } from "lucide-react";

export default async function Home() {
  return (
    <div className="h-[92vh] overflow-scroll">
      <header className="p-4 flex justify-between items-center">
        <h1 className="text-lg">Glimpse</h1>
        <div className="flex gap-4">
          <Heart size={20} />

          <form action={logout}>
            <button type="submit" className="cursor-pointer">
              <LogOut size={20} />
            </button>
          </form>
        </div>
      </header>

      <Stories />
    </div>
  );
}
