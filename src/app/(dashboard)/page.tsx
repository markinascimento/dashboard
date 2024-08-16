// -> NextJS
import Image from "next/image";

// -> Icons lib
import { CircleChevronRight, SquarePen } from "lucide-react";

// -> Components
import { Header } from "@/shared/components/Header";
import { ColleaguesActivityCard } from "./components/ColleaguesActivityCard";
import { LastReviewCard } from "./components/LastReviewCard";
import { WeatherCard } from "./components/WeatherCard";
import { WriteSomethingCard } from "./components/WriteSomethingCard";

// -> Images
import personaImage from "@/assets/icons/persona.svg";
import juliaPersonaImage from "@/assets/images/julia-persona.png";

export default function Dashboard() {
  return (
    <>
      <Header>
        <section className="bg-royal-blue-500 grid grid-cols-1 gap-2 px-4 rounded-xl mt-8 md:grid-cols-3">
          <div className="flex flex-col justify-center gap-2 col-span-2 p-4">
            <h1 className="font-bold text-white">Welcome back, Julía!</h1>

            <p className="text-white text-sm">
              Today is <strong> October 3, 2023. </strong> You have{" "}
              <strong> 126 </strong> news and alerts, along with{" "}
              <strong> 3 </strong> messages awaiting your response.
            </p>
          </div>

          <div className="relative hidden md:flex md:justify-end">
            <Image src={personaImage} alt="Imagem do usuário" className="" />
          </div>
        </section>
      </Header>

      <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 mt-10 outline-none scrollbar-none">
        <WeatherCard />

        <ColleaguesActivityCard />

        <WriteSomethingCard />
      </section>

      <main className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        <section
          className='flex flex-col gap-4 w-full h-80 bg-cover rounded-2xl p-4
          bg-no-repeat bg-[url("../../assets/icons/the-demise-fashion.svg")] '
        >
          <div className="flex items-center justify-center w-10 h-10 bg-royal-blue-500 rounded-full">
            <CircleChevronRight className="text-white" />
          </div>

          <div className="flex flex-1 flex-col gap-1 justify-center">
            <strong className="text-white text-lg">
              The Demise of Fashion
            </strong>
            <p className="text-white text-sm">
              Humanity’s fashion reached its zenith during the Vectorian era;
              unfortunately, it was during this very time that its decline
              began. Now, it has finally hit rock bottom...
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Image
              src={juliaPersonaImage}
              alt="Imagem de Julia"
              width={48}
              height={48}
              priority
            />
            <strong className="text-white"> By Julia Grey </strong>
          </div>
        </section>

        <section className=" flex flex-col gap-4 w-full h-80 bg-white rounded-2xl p-4">
          <div className="flex items-start justify-between w-full">
            <strong> Your Latest Reviews </strong>
            <SquarePen className="rotate-180" />
          </div>
          <LastReviewCard name="Calipso Sensations" note={7.2} />
          <LastReviewCard name="V Tech Mattee" note={9.1} />
          <LastReviewCard name="Emerald V6" note={7.9} />
        </section>
      </main>
    </>
  );
}
