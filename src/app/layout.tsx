"use client";

// -> ReactJS
import { useCallback, useState } from "react";

// -> NextJS
import { Poppins } from "next/font/google";

// -> Components
import { Sidebar } from "@/shared/layouts/Sidebar";
import { ToggleSidebar } from "@/shared/layouts/ToggleSidebar";

// -> CSS Global
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

          <Sidebar isOpen={isOpen} toggleOpen={toggleOpen} />

          <div className="pt-12 flex flex-col flex-1 overflow-y-auto lg:overflow-hidden lg:pt-0 main-container">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
