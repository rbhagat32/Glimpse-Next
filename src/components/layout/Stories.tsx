import { Avatar } from "../ui/avatar";

export default function Stories() {
  return (
    <div className="mt-6 flex gap-2 overflow-x-auto">
      {[...Array(20)].map((_, i) => {
        return <Avatar key={`story-${i}`} size="size-16" />;
      })}
    </div>
  );
}
