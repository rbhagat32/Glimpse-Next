import Image from "next/image";

interface PropTypes {
  src?: string;
  size?: string;
}

const Avatar = ({ src, size = "size-7.5" }: PropTypes) => {
  console.log(size);
  const dimension = Number(size.split("-")[1]) * 4;
  console.log(dimension);

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
