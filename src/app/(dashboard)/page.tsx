// -> NextJS
import Image from "next/image";

// -> Components
import { Header } from "@/shared/components/Header";
import { ColleaguesActivityCard } from "./components/ColleaguesActivityCard";
import { WeatherCard } from "./components/WeatherCard";
import { WriteSomethingCard } from "./components/WriteSomethingCard";

// -> Images
import personaImage from "@/assets/icons/persona.svg";

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

        <ColleaguesActivityCard />

        <WriteSomethingCard />
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className='bg-cover bg-[url("../../assets/icons/the-demise-fashion.svg")] h-64 rounded-2xl p-4'>
          a
        </div>
        <div className="bg-white h-64 rounded-2xl">b</div>
      </section>
    </>
  );
}
