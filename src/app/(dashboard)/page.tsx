// -> NextJS
import Image from "next/image";

// -> Components
import { Header } from "@/shared/components/Header";

// -> Images
import personaImage from "@/assets/images/persona.svg";
import { Hourglass, RotateCcw } from "lucide-react";
import { SlideCard } from "./components/SlideCard";
import { WeatherCard } from "./components/WeatherCard";
import { WriteSomethingCard } from "./components/WriteSomethingCard";

export default function Dashboard() {
  return (
    <>
      <Header>
        <section className="bg-royal-blue-500 grid grid-cols-1 gap-2 p-4 rounded-xl mt-8 md:grid-cols-3">
          <div className="flex flex-col gap-2 col-span-2 pl-4">
            <h1 className="font-bold text-white">Welcome back, Julía!</h1>

            <p className="text-white text-sm">
              Today is <strong> October 3, 2023. </strong> You have{" "}
              <strong> 126 </strong> news and alerts, along with{" "}
              <strong> 3 </strong> messages awaiting your response.
            </p>
          </div>

          <div className="relative hidden md:flex md:justify-end">
            <Image
              src={personaImage}
              alt="Imagem do usuário"
              className="absolute -top-[80%] h-36"
            />
          </div>
        </section>
      </Header>

      <section className="flex gap-2 overflow-x-auto lg:justify-center mt-8 outline-none scrollbar-none">
        <WeatherCard />

        <SlideCard title="Colleagues’ Activity" Icon={Hourglass}>
          <div className="flex flex-col flex-1 w-full">
            <span> oi </span>
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

        <WriteSomethingCard />
      </section>
    </>
  );
}
