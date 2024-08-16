"use client";

// -> ReactJS
import { useCallback, useState } from "react";

// -> NextJS
import Image from "next/image";
import { useRouter } from "next/navigation";

// -> Icons lib
import { ChartNoAxesGantt, ChevronLeft } from "lucide-react";

// -> Utils
import { cn } from "../../utils/cn";

// -> Components
import { NavItem } from "./components/NavItem";

// -> Icons
import logoIcon from "@/assets/icons/logo.svg";

// -> data
import { sidebarRoutes } from "../../configs/sidebarRoutes";

export function Sidebar() {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  const openSidebar = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeSidebar = useCallback(() => {
    setIsOpen(false);
  }, []);

  const nagivatePage = useCallback(
    (path: string) => {
      router.push(path);
      closeSidebar();
    },
    [router, closeSidebar]
  );

  return (
    <>
      <section className="absolute top-0 h-10 bg-background w-full lg:hidden">
        <button
          type="button"
          onClick={openSidebar}
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
        <header className="flex items-center justify-between mt-2 relative mb-14 pl-4 lg:justify-center lg:pl-0">
          <button
            type="button"
            onClick={closeSidebar}
            className="absolute flex items-center justify-center bg-royal-blue-500 -right-5 top-0 w-10 h-10 rounded-full lg:hidden"
          >
            <ChevronLeft className="text-white size-6" strokeWidth={3} />
          </button>

          <Image src={logoIcon} alt="Logo da aplicação" priority />
        </header>

        <section className="space-y-6">
          {sidebarRoutes.map((route) => (
            <NavItem
              key={route.name}
              Icon={route.Icon}
              name={route.name}
              path={route.path}
              navigate={nagivatePage}
            />
          ))}
        </section>
      </nav>
    </>
  );
}
