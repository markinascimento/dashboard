// -> Icons lib
import { PencilLine } from "lucide-react";

// -> Components
import { SlideCard } from "./SlideCard";

export function WriteSomethingCard() {
  return (
    <SlideCard title="Quick Draft" Icon={PencilLine}>
      <textarea
        placeholder="Write something..."
        className="flex flex-1 border-2 w-full rounded-md resize-none p-2 outline-none text-sm
      focus:border-royal-blue-500 transition-all scrollbar-none"
      />

      <button className="flex items-center justify-center h-10 w-full bg-royal-blue-500 rounded-full">
        <strong className="uppercase text-white tracking-[3px] text-sm">
          CONTINUE
        </strong>
      </button>
    </SlideCard>
  );
}
