interface InputProps {
  name: string;
  type: "text" | "email" | "password";
  label: string;
  defaultValue?: string;
}

export default function Input({ name, type, label, defaultValue }: InputProps) {
  return (
    <div className="relative">
      <input
        name={name}
        id={`id_${label}`}
        type={type}
        placeholder=" "
        defaultValue={defaultValue || ""}
        autoComplete="off"
        className="block px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent rounded-lg border-1 appearance-none text-white border-stone-700 focus:border-stone-400 focus:outline-none focus:ring-0 peer"
      />
      <label
        htmlFor={`id_${label}`}
        className="absolute pointer-events-none text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-stone-950 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
      >
        {label}
      </label>
    </div>
  );
}
