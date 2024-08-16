import { Search } from "lucide-react";

export function Input() {
  return (
    <div className="relative w-full">
      <input
        type="text"
        placeholder="Search"
        className="w-full shadow-lg h-12 rounded-[10px] border-2 border-white outline-none px-4 
        font-medium tracking-[-0.5px] text-sm
        focus:border-primary transition-all placeholder:font-light placeholder:text-zinc-600"
      />

      <Search className="size-5 absolute top-1/2 -translate-y-1/2 right-4" />
    </div>
  );
}
