import { Avatar } from "../ui/avatar";
import { Swiper } from "../utils/Swiper";

const Stories = () => {
  return (
    <div className="mt-6">
      <Swiper>
        {[...Array(20)].map((_, i) => {
          return <Avatar key={`story-${i}`} size="size-18" />;
        })}
      </Swiper>
    </div>
  );
};

export { Stories };
