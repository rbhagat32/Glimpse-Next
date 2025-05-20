import Stories from "@/components/layout/Stories";
import { Heart } from "lucide-react";

export default async function Home() {
  return (
    <div className="h-[92vh]">
      <header className="px-4 py-3 flex justify-between items-center">
        <h1 className="text-lg">Glimpse</h1>
        <Heart size={18} />
      </header>

      <Stories />
    </div>
  );
}
