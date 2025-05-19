import { fetchUser } from "@/actions/data/user";
import { SquarePlus, HouseIcon, Search, Clapperboard } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function BottomNav() {
  const user = await fetchUser();

  return (
    <nav className="h-[8vh] px-10 flex justify-between items-center">
      {links(user!).map((link, i) => (
        <Link key={i} href={link.href}>
          {link.component}
        </Link>
      ))}
    </nav>
  );
}

const links = (user: UserTypes) => {
  return [
    {
      href: "/",
      component: <HouseIcon />,
    },
    {
      href: "/explore",
      component: <Search />,
    },
    {
      href: "/create",
      component: <SquarePlus />,
    },
    {
      href: "/",
      component: <Clapperboard />,
    },
    {
      href: "/profile",
      component: (
        <div className="size-6 rounded-full overflow-hidden border-2">
          <Image
            src={user.avatar?.url || "/placeholder.jpg"}
            alt="Profile Image"
            width={28}
            height={28}
            className="object-cover"
          />
        </div>
      ),
    },
  ];
};
