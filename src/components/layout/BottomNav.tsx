"use client";

import { useGetUser } from "@/contexts/UserContext";
import { SquarePlus, HouseIcon, Search, Clapperboard } from "lucide-react";
import Link from "next/link";
import { Avatar } from "../ui/avatar";
import { Icon } from "../ui/icon";

export default function BottomNav() {
  const user = useGetUser();

  return (
    <nav className="py-5 px-10 flex justify-between items-center">
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
      component: (
        <Icon>
          <HouseIcon />
        </Icon>
      ),
    },
    {
      href: "/explore",
      component: (
        <Icon>
          <Search />
        </Icon>
      ),
    },
    {
      href: "/create",
      component: (
        <Icon>
          <SquarePlus />
        </Icon>
      ),
    },
    {
      href: "/",
      component: (
        <Icon>
          <Clapperboard />
        </Icon>
      ),
    },
    {
      href: "/profile",
      component: <Avatar src={user.avatar?.url} />,
    },
  ];
};
