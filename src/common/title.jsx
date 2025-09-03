import { cn } from "../utils/cn";

export default function Title({ children, className }) {
  return (
    <h1
      className={cn(
        "text-3xl md:text-[42px] leading-[54px] tracking-[-2%] font-bold text-[#26395C]  mb-4",
        className
      )}
    >
      {children}
    </h1>
  );
}

