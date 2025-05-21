import { logout } from "@/actions/auth/logout";
import { Icon } from "@/components/ui/icon";
import { Heart, LogOut } from "lucide-react";
import Image from "next/image";

export default function Header() {
  return (
    <header className="mt-6 flex justify-between items-center">
      <Image src="/logo.png" alt="Logo" width={160} height={120} />
      <div className="flex gap-1">
        <Icon>
          <Heart size={20} />
        </Icon>

        <form action={logout}>
          <Icon type="submit">
            <LogOut size={20} />
          </Icon>
        </form>
      </div>
    </header>
  );
}
