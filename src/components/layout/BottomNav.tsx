import { SquarePlus, HouseIcon, Search, Clapperboard } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface LinkTypes {
  href: string;
  component: React.ReactNode;
}

const links: LinkTypes[] = [
  {
    href: "/",
    component: <HouseIcon />,
  },
  {
    href: "/",
    component: <Search />,
  },
  {
    href: "/",
    component: <SquarePlus />,
  },
  {
    href: "/",
    component: <Clapperboard />,
  },
  {
    href: "/",
    component: (
      <div className="size-7 rounded-full overflow-hidden">
        <Image src="/auth.jpeg" alt="Profile Image" width={200} height={200} />
      </div>
    ),
  },
];

export default function BottomNav() {
  return (
    <nav className="h-[8vh] px-10 flex justify-between items-center border-t">
      {links.map((link, i) => (
        <Link key={i} href={link.href}>
          {link.component}
        </Link>
      ))}
    </nav>
  );
}
