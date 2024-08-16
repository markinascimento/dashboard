// -> Icons lib
import { ChartNoAxesGantt } from "lucide-react";

export function ToggleSidebar({ toggleOpen }: { toggleOpen(): void }) {
  return (
    <section className="absolute top-0 h-10 bg-background w-full lg:hidden">
      <button
        type="button"
        onClick={toggleOpen}
        className="flex items-center justify-center h-10 w-10"
      >
        <ChartNoAxesGantt />
      </button>
    </section>
  );
}
