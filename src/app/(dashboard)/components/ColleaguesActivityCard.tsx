// -> NextJS
import Image from "next/image";

// -> Icons lib
import { Hourglass } from "lucide-react";

// -> Components
import { SlideCard } from "./SlideCard";

// -> Images
import amandaPersona from "@/assets/images/amanda-persona.png";
import rinPersona from "@/assets/images/rin-persona.png";
import selinaPersona from "@/assets/images/selina-persona.png";

export function ColleaguesActivityCard() {
  return (
    <SlideCard title="Colleagues’ Activity" Icon={Hourglass}>
      <main
        className="flex flex-col flex-1 w-full overflow-auto scrollbar-thumb-royal-blue-500 
      scrollbar-track-white scrollbar-thin space-y-4"
      >
        <div className="flex items-center w-full gap-2 bg-royal-blue-100 px-2 py-1 rounded-lg">
          <Image src={amandaPersona} alt="Imagem de uma pessoa" />
          <div className="flex flex-col">
            <span className="text-sm font-medium"> Amanda Lock </span>
            <small className="block -mt-1 text-xs text-[#A3A1FF]">
              October 2, 2023 - 10:42 PM
            </small>
          </div>
        </div>

        <div className="flex items-center w-full gap-2 bg-royal-blue-100 px-2 py-1 rounded-lg">
          <Image src={selinaPersona} alt="Imagem de uma pessoa" />
          <div className="flex flex-col">
            <span className="text-sm font-medium"> Selina Fye </span>
            <small className="block -mt-1 text-xs text-[#A3A1FF]">
              October 2, 2023 - 09:16 PM
            </small>
          </div>
        </div>

        <div className="flex items-center w-full gap-2 bg-royal-blue-100 px-2 py-1 rounded-lg">
          <Image src={rinPersona} alt="Imagem de uma pessoa" />
          <div className="flex flex-col">
            <span className="text-sm font-medium"> Rin Vulcan </span>
            <small className="block -mt-1 text-xs text-[#A3A1FF]">
              October 2, 2023 - 05:23 PM
            </small>
          </div>
        </div>
      </main>
    </SlideCard>
  );
}
