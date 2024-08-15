import { useCallback, useState, type ReactNode } from "react";
import { cn } from "../utils/cn";

export function Sidebar({ children }: { children: ReactNode }) {

  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = useCallback(() => {
    setIsOpen(prevState => !prevState)
  }, []);

  return (
    <div className="bg-red-500 w-full h-full">
      <button 
        type="button" 
        onClick={toggleOpen} 
        className="z-20 absolute hidden"
      >
        <span className="lg:text-yellow-500"> Abrir </span>
      </button>

      <nav className={cn(
        "bg-blue-500  fixed w-[75vw] h-full left-[-100%] lg:max-w-72 lg:left-0 duration-1000",
        isOpen && 'left-0'
      )}>
        <span> nav </span>
      </nav>
      
      <div className="p-10">
        {children}
      </div>
    </div>
  )
}
