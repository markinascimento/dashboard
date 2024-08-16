// -> ReactJS
import type { ElementType, ReactNode } from "react";

// -> Types
interface ISlideCardProps {
  title: string;
  Icon: ElementType;
  children: ReactNode;
}

export function SlideCard({ title, Icon, children }: ISlideCardProps) {
  return (
    <div className="flex flex-col gap-4 bg-white min-w-72 h-60 rounded-xl p-4">
      <div className="flex items-center justify-between px-2">
        <strong> {title} </strong>
        <Icon />
      </div>

      {children}
    </div>
  );
}
