// -> NextJS
import Image from "next/image";

// -> Components
import { Header } from "@/shared/components/Header";

// -> Images
import personaImage from "@/assets/images/persona.svg";

export default function Dashboard() {
  return (
    <>
      <Header>
        <section className="bg-primary grid grid-cols-3 gap-2 p-4 rounded-xl mt-8">
          <div className="flex flex-col gap-2 col-span-2 pl-4">
            <h1 className="font-bold text-white">Welcome back, Julía!</h1>

            <p className="text-white text-sm">
              Today is <strong> October 3, 2023. </strong> You have{" "}
              <strong> 126 </strong> news and alerts, <br />
              along with <strong> 3 </strong> messages awaiting your response.
            </p>
          </div>

          <div className="relative">
            <Image
              src={personaImage}
              alt="Imagem do usuário"
              className="absolute -top-[80%] h-36"
            />
          </div>
        </section>
      </Header>

      <main className="flex flex-col w-full bg-red-200 mt-8 overflow-y-auto">
        <h1> dashboard </h1> <br /> <br /> <br /> <br />
        <h1> dashboard </h1> <br /> <br /> <br /> <br />
        <h1> dashboard </h1> <br /> <br /> <br /> <br />
        <h1> dashboard </h1> <br /> <br /> <br /> <br />
        <h1> dashboard </h1> <br /> <br /> <br /> <br />
        <h1> dashboard </h1> <br /> <br /> <br /> <br />
      </main>
    </>
  );
}
