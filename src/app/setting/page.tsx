// -> Icons lib
import { Camera, CircleChevronRight, Trash2 } from "lucide-react";

// -> Components
import { Header } from "@/shared/components/Header";
import { Input } from "@/shared/components/Input";

export default function Setting() {
  return (
    <>
      <Header />

      <main className="flex flex-col gap-4 mt-8 md:flex-row">
        <section 
          className="flex flex-col items-center justify-center gap-6 w-full  
          max-h-[273px] p-6 rounded-lg bg-white shadow-lg md:max-w-[241px]"
        >
          <div className="bg-background p-9 rounded-full">
            <Camera className="size-16 text-[#A3A1FF]" />
          </div>
          <strong> Click or Drag & Drop </strong>
          <small className="text-zinc-600 tracking-[2px]"> PNG OR JPG MAX 2MB </small>
        </section>

        <form className="w-full bg-white shadow-lg rounded-lg pb-8">
          <section className="flex flex-col gap-8 p-5 mb-8 max-w-[658px]">
            <strong className="text-xl font-bold"> Edit Your Information </strong>

            <Input 
              placeholder="FULLNAME" 
              className="shadow-none border-2 border-zinc-100 placeholder:tracking-[2px] placeholder:font-semibold" 
              isIconSearch={false} 
            />
            
            <Input 
              placeholder="POSITION" 
              className="shadow-none border-2 border-zinc-100 placeholder:tracking-[2px] placeholder:font-semibold" 
              isIconSearch={false} 
            />
          </section>

          <hr className="w-full max-w-[636px] h-[2px] bg-royal-blue-900 opacity-20" />

          <section className="flex flex-col gap-8 p-5 mt-6 max-w-[658px]">
            <strong className="text-xl font-bold"> Edit Your Credentials </strong>

            <Input 
              placeholder="EMAIL" 
              className="shadow-none border-2 border-zinc-100 placeholder:tracking-[2px] placeholder:font-semibold" 
              isIconSearch={false} 
            />
            
            <Input 
              placeholder="PASSWORD" 
              className="shadow-none border-2 border-zinc-100 placeholder:tracking-[2px] placeholder:font-semibold" 
              isIconSearch={false} 
            />
          </section>

          <section className="max-w-[658px] grid grid-cols-1 gap-4 px-6 sm:grid-cols-2">
            <button
              className="flex items-center justify-center h-14 rounded-full gap-9 
              bg-royal-blue-500 text-white"
            > 
              <strong className="tracking-[2px] text-sm"> SAVE CHANGES </strong> 
              <CircleChevronRight />
            </button>

            <button
              className="flex items-center justify-center h-14 rounded-full gap-6 
              bg-red-500 text-white"
            > 
              <strong className="tracking-[2px] text-sm"> REMOVE ACCOUNT </strong> 
              <Trash2 />
            </button>
          </section>
        </form>
      </main>
    </>
  );
}
