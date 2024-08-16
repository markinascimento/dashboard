"use client";

// -> ReactJS
import type { ElementType } from "react";

// -> NextJS
import { usePathname } from "next/navigation";

// -> Icons lib
import { cn } from "@/shared/utils/cn";

// -> Types
interface INavItensProps {
  name: string;
  path: string;
  Icon: ElementType;
  navigate(path: string): void;
}

export function NavItem({ name, path, Icon, navigate }: INavItensProps) {
  const pathname = usePathname();

  const isActive = pathname === path;

  return (
    <button
      onClick={() => navigate(path)}
      className={cn(
        "flex items-center justify-between w-full h-10",
        isActive ? "opacity-100" : "opacity-50"
      )}
    >
      <div className="flex items-center px-4 gap-2 w-full h-full">
        <Icon className="size-5 text-primary" strokeWidth={2.5} />
        <strong className="tracking-[3px] font-bold text-[#15133D] uppercase">
          {name}
        </strong>
      </div>

      <div
        className={cn(
          "w-2 h-[23px] rounded-tl-2xl rounded-bl-2xl bg-transparent",
          isActive && "bg-primary"
        )}
      />
    </button>
  );
}
