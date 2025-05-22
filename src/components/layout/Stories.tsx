import { Avatar } from "../ui/avatar";
import { Swiper } from "../utils/Swiper";

export default function Stories() {
  return (
    <div className="mt-6">
      <Swiper>
        {[...Array(20)].map((_, i) => {
          return <Avatar key={`story-${i}`} size="size-16" />;
        })}
      </Swiper>
    </div>
  );
}
