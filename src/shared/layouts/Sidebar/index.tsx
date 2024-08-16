"use client";

// -> ReactJS
import { useCallback, useState } from "react";

// -> NextJS
import Image from "next/image";

// -> Icons lib
import { ChartNoAxesGantt, ChevronLeft, LayoutDashboard } from "lucide-react";

// -> Utils
import { cn } from "../../utils/cn";

// -> Components

// -> Utils
import logoIcon from "@/assets/icons/logo.svg";

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((prevState) => !prevState);
  }, []);

  return (
    <div>
      <section className="absolute top-0 h-10 bg-background w-full lg:hidden">
        <button
          type="button"
          onClick={toggleOpen}
          className="flex items-center justify-center h-10 w-10"
        >
          <ChartNoAxesGantt />
        </button>
      </section>

      <nav
        className={cn(
          "bg-white  fixed w-[85vw] h-full left-[-100%] lg:max-w-72 lg:left-0 duration-1000",
          isOpen && "left-0"
        )}
      >
        <header className="flex items-center justify-center mt-2 relative mb-14">
          <button
            type="button"
            onClick={toggleOpen}
            className="absolute flex items-center justify-center bg-primary -right-5 top-0 w-10 h-10 rounded-full lg:hidden"
          >
            <ChevronLeft className="text-white size-6" strokeWidth={3} />
          </button>

          <Image src={logoIcon} alt="Logo da aplicação" priority />
        </header>

        <section className="space-y-6">
          <div className="flex items-center justify-between w-full h-10">
            <div className="flex items-center px-4 gap-2 w-full h-full">
              <LayoutDashboard
                className="size-5 text-primary"
                strokeWidth={2.5}
              />
              <strong className="text-lg tracking-[3px] font-bold text-[#15133D]">
                DASHBOARD
              </strong>
            </div>

            <div className="w-2 h-[23px] rounded-tl-2xl rounded-bl-2xl bg-primary" />
          </div>

          <div className="flex items-center justify-between w-full h-10">
            <div className="flex items-center px-4 gap-2 w-full h-full">
              <LayoutDashboard
                className="size-5 text-primary"
                strokeWidth={2.5}
              />
              <strong className="text-lg tracking-[3px] font-bold text-[#15133D]">
                DASHBOARD
              </strong>
            </div>

            <div className="w-2 h-[23px] rounded-tl-2xl rounded-bl-2xl bg-primary" />
          </div>

          <div className="flex items-center justify-between w-full h-10">
            <div className="flex items-center px-4 gap-2 w-full h-full">
              <LayoutDashboard
                className="size-5 text-primary"
                strokeWidth={2.5}
              />
              <strong className="text-lg tracking-[3px] font-bold text-[#15133D]">
                DASHBOARD
              </strong>
            </div>

            <div className="w-2 h-[23px] rounded-tl-2xl rounded-bl-2xl bg-primary" />
          </div>
        </section>
      </nav>
    </div>
  );
}
