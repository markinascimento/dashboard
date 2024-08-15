'use client'

import logoIcon from '@/assets/icons/logo.svg';
import { cn } from "@/shared/utils/cn";
import { ChartNoAxesGantt, ChevronLeft } from 'lucide-react';
import { Inter } from "next/font/google";
import Image from "next/image";
import { useCallback, useState } from "react";
import "../assets/styles/globals.css";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = useCallback(() => {
    setIsOpen(prevState => !prevState)
  }, []);

  return (
    <html lang="pt-BR" className="w-full h-full">
      <body className={`w-full h-full ${inter.className}`}>
        <div className="bg-background w-full h-full">
          <button 
            type='button'
            onClick={toggleOpen} 
            className="absolute flex items-center justify-center h-10 w-10 lg:hidden"
          >
            <ChartNoAxesGantt />
          </button>

          <nav className={cn(
            "bg-white  fixed w-[85vw] h-full left-[-100%] lg:max-w-72 lg:left-0 duration-1000",
            isOpen && 'left-0'
          )}>
            <header className="flex items-center justify-center mt-2 relative">
              <button
                type="button"
                onClick={toggleOpen}
                className="absolute flex items-center justify-center bg-primary -right-5 top-0 w-10 h-10 rounded-full lg:hidden"
              >
                <ChevronLeft className='text-white size-6' strokeWidth={3} />
              </button> 

                <Image src={logoIcon} alt="Logo da aplicação"  />
            </header>

            <span> nav </span>
          </nav>
          
          <div className="p-10">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
