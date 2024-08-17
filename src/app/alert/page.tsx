// -> Icons lib
import { CalendarClock, ChevronDownCircle } from "lucide-react";

// -> Components
import { Header } from "@/shared/components/Header";
import { Card } from "./components/Card";

export default function Alert() {
  return (
    <>
      <Header>
        <section className="grid grid-cols-1 px-2 py-4 gap-3 rounded-[10px] mt-8 bg-royal-blue-500 lg:grid-cols-2">
          <div className="bg-royal-blue-500 flex items-center justify-evenly h-10  overflow-hidden">
            <span 
              className="relative text-white font-semibold text-sm
              before:content-[''] before:absolute before:bg-royal-blue-900 before:w-[140%] 
              before:h-3 before:-bottom-3.5 before:rounded before:left-[-20%]"
              > 
              Today 
            </span>

            <span className="relative text-white font-semibold opacity-50"> 
              This Week 
            </span>

            <span className="relative text-white font-semibold opacity-50"> 
              This Month 
            </span>
          </div>

          <div className="flex flex-col gap-2 items-center justify-between px-4 lg:px-2 sm:flex-row">
            <button
              className="flex items-center gap-14 px-8 py-2 rounded-full shadow-lg bg-white"
            >
              <strong className="text-sm"> All Types </strong>
              <ChevronDownCircle />
            </button>

            <button
              className="flex items-center gap-14 px-8 py-2 rounded-full shadow-lg bg-white"
            >
              <strong className="text-sm"> Custom Date </strong>
              <CalendarClock />
            </button>
          </div>
        </section>
      </Header>
      
      <main className="space-y-4 mt-8">
        <Card isNew /> 
        <Card /> 
        <Card /> 
        <Card isNew /> 
        <Card /> 
        <Card /> 
        <Card isNew /> 
        <Card /> 
        <Card /> 
        <Card /> 
      </main>
    </>
  );
}
