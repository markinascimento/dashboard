// -> Icons lib
import { CloudDrizzle, RotateCcw, Umbrella } from "lucide-react";

// -> Components
import { SlideCard } from "./SlideCard";

export function WeatherCard() {
  return (
    <SlideCard title="Weather" Icon={Umbrella}>
      <div className="flex flex-col flex-1 w-full items-center justify-center gap-2">
        <CloudDrizzle
          className="size-14 text-royal-blue-500"
          strokeWidth={2.8}
        />
        <strong className="text-royal-blue-500"> 16° (Rain) </strong>
      </div>

      <div className="flex items-center justify-between bg-royal-blue-100 px-2 py-1 rounded-full">
        <p>
          <strong className="text-sm"> Austin, TX (USA) </strong> <br />
          <small className="block -mt-1 text-xs text-gray-400 font-medium">
            October 3rd, 2023
          </small>
        </p>

        <button className="flex items-center justify-center h-8 w-8 bg-royal-blue-500 rounded-full">
          <RotateCcw className="size-5 text-white" strokeWidth={2.5} />
        </button>
      </div>
    </SlideCard>
  );
}
