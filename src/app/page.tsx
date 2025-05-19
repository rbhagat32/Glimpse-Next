import Header from "@/components/layout/Header";
import Stories from "@/components/layout/Stories";

export default async function Home() {
  return (
    <div className="h-[92vh]">
      <Header />
      <Stories />
    </div>
  );
}
