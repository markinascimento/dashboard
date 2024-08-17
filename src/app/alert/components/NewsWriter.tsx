// -> NextJS
import Image from "next/image";

// -> Icons lib
import { Eye } from "lucide-react";

// -> Utils
import { cn } from "@/shared/utils/cn";

// -> Images
import rinImage from '@/assets/images/rin-persona.png';

// -> Types
interface INewsWriterProps {
  className?: string;
}

export function NewsWriter({ className }: INewsWriterProps) {
  return (
    <div className={cn(
      "flex flex-col gap-2 w-full bg-royal-blue-100 p-2 rounded-md lg:flex-row lg:gap-8",
      className
    )}>
      <div className="flex items-center gap-2">
        <Image src={rinImage} alt="Imagem de quem escreveu a materia" />
        
        <strong> Rin Vulcan </strong>

        <small> 3 October, 2023 - 10:35 AM </small>
      </div>

      <div className="flex items-center gap-4 lg:gap-6">
        <strong className="text-sm text-royal-blue-500"> IN TECHNOLOGY </strong>

          <Eye />
        <strong> 116.2k </strong>
      </div>
    </div>
  )
}
