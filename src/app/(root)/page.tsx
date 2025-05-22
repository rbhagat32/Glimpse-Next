import { Stories } from "@/components/layout/Stories";
import { Post } from "@/components/layout/Post";

export default async function Home() {
  return (
    <div className="px-4">
      <Stories />

      {[...Array(5)].map((_, i) => {
        return <Post key={`post-${i}`} />;
      })}
    </div>
  );
}
