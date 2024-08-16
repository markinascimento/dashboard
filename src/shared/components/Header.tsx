// -> Icons lib
import { PenLine, Plus } from "lucide-react";

// -> Components
import { Input } from "./Input";

export function Header({ children }: { children?: React.ReactNode }) {
  return (
    <header className="flex flex-col w-full">
      <section className="flex items-center justify-center gap-4 ">
        <Input />

        <button
          type="button"
          className="flex items-center justify-center bg-royal-blue-500 min-h-12 min-w-12 rounded-full outline-none
          border-2 focus:border-zinc-800 transition-all text-white
          lg:min-w-36 lg:justify-between lg:rounded-[10px] lg:px-3"
        >
          <Plus className="lg:hidden" />
          <span className="text-sm font-medium hidden lg:block">
            New article
          </span>
          <PenLine className="size-5 hidden lg:block" strokeWidth={2.5} />
        </button>
      </section>

      {children ? children : null}
    </header>
  );
}
