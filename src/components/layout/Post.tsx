import Link from "next/link";
import { Avatar } from "../ui/avatar";
import Image from "next/image";

const Post = () => {
  return (
    <div className="mt-4 text-justify bg-zinc-800 px-4 py-3 rounded-md border border-zinc-400">
      {/* header */}
      <div className="flex justify-between items-end">
        <Link href={"/"} className="flex items-end gap-2 sm:gap-3">
          <Avatar />
          <h1 className="mb-1">raghav</h1>
        </Link>

        <p>❤️ 20</p>
      </div>

      <div id="content" className="mt-4 flex flex-col gap-4">
        <div className="object-cover object-center rounded-md">
          <Image
            src={"/placeholder.jpeg"}
            alt={"Post"}
            width={400}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-lg">caption</p>
      </div>

      <div className="mt-6 flex justify-between">
        <div className="flex gap-3">Like Edit Delete</div>

        <div className="flex gap-1">
          <p className="text-zinc-400 text-sm">(edited)</p>
          <p className="text-zinc-400 text-sm">moment(post.date).fromNow()</p>
        </div>
      </div>
    </div>
  );
};

export { Post };
