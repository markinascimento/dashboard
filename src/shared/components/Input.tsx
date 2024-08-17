// -> ReactJS
import type { ComponentProps } from "react";

// -> Icons lib
import { Search } from "lucide-react";

// -> Utils
import { cn } from "../utils/cn";

// -> Types
interface IInputProps extends ComponentProps<'input'>{
  isIconSearch?: boolean;
  className?: string
  placeholder?: string
}

export function Input({ 
  className, 
  placeholder = 'Search',
  isIconSearch = true 
}: IInputProps) {
  return (
    <div className="relative w-full">
      <input
        type="text"
        placeholder={placeholder}
        className={cn(
          `w-full shadow-lg h-12 rounded-[10px] border-2 border-white outline-none px-4 
          font-medium tracking-[-0.5px] text-sm focus:border-royal-blue-500 transition-all 
          placeholder:font-light placeholder:text-zinc-600`,
          className
        )}
      />
      {isIconSearch && (
        <Search className="size-5 absolute top-1/2 -translate-y-1/2 right-4" />
      )}
    </div>
  );
}
