"use client";

// -> NextJS
import Image from "next/image";

// -> Icons lib
import { ChevronLeft } from "lucide-react";

// -> Utils
import { cn } from "@/shared/utils/cn";

// -> Components
import { NavItens } from "./components/NavItens";

// -> Utils
import logoIcon from "@/assets/icons/logo.svg";

// -> Types
interface INavigationProps {
  isOpen: boolean;
  toggleOpen(): void;
}

export function Sidebar({ isOpen, toggleOpen }: INavigationProps) {
  return (
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
        <NavItens />
        <NavItens />
        <NavItens />
        <NavItens />
      </section>
    </nav>
  );
}
