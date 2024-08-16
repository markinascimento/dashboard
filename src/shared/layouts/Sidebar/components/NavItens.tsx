"use client";

import { LayoutDashboard } from "lucide-react";

export function NavItens() {
  return (
    <div className="flex items-center justify-between w-full h-10">
      <div className="flex items-center px-4 gap-2 w-full h-full">
        <LayoutDashboard className="size-5 text-primary" strokeWidth={2.5} />
        <strong className="text-lg tracking-[3px] font-bold text-[#15133D]">
          DASHBOARD
        </strong>
      </div>

      <div className="w-2 h-[23px] rounded-tl-2xl rounded-bl-2xl bg-primary" />
    </div>
  );
}
