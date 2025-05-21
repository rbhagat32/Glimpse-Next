"use client";

interface PropTypes {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
}

const Icon = ({ children, type }: PropTypes) => {
  return (
    <button type={type || "button"} className="p-2 hover:bg-zinc-700 rounded-md duration-300">
      {children}
    </button>
  );
};

export { Icon };
