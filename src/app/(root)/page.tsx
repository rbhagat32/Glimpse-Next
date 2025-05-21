import Header from "@/components/layout/Header";
import Stories from "@/components/layout/Stories";

export default async function Home() {
  return (
    <div className="px-4">
      <Header />
      <Stories />
    </div>
  );
}
