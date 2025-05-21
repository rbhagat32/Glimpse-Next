import Image from "next/image";

interface PropTypes {
  src?: string | null;
  size?: string;
}

const Avatar = ({ src, size = "size-7.5" }: PropTypes) => {
  const dimension = Number(size.split("-")[1]) * 4;

  return (
    <div className={`${size} rounded-full overflow-hidden`}>
      <Image
        src={src || "/placeholder.jpeg"}
        alt="Profile Image"
        width={dimension}
        height={dimension}
        className="object-cover"
      />
    </div>
  );
};

export { Avatar };
