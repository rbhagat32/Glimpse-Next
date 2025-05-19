import { Heart } from "lucide-react";

export default function Header() {
  return (
    <header className="px-4 py-2 flex justify-between items-center">
      <h1>Glimpse</h1>
      <Heart />
    </header>
  );
}
