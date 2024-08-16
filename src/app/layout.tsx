"use client";

// -> ReactJS
import { useCallback, useState } from "react";

// -> NextJS
import { Poppins } from "next/font/google";

// -> Components
import logoIcon from "@/assets/icons/logo.svg";
import { ToggleSidebar } from "@/shared/layouts/ToggleSidebar";
import Image from "next/image";
// -> CSS Global
import { cn } from "@/shared/utils/cn";
import { ChevronLeft, LayoutDashboard } from "lucide-react";
import "../assets/styles/globals.css";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((prevState) => !prevState);
  }, []);

  return (
    <html lang="pt-BR" className="w-full h-full">
      <body className={`w-full h-full ${poppins.className}`}>
        <div className="bg-background w-full h-full overflow-y-auto lg:overflow-y-hidden">
          <ToggleSidebar toggleOpen={toggleOpen} />

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
            </section>
          </nav>

          <div className="pt-12 flex flex-col flex-1 overflow-y-auto lg:overflow-hidden lg:pt-0 main-container">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
