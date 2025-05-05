import Image from "next/image";
import add from "../public/add.png";
import info from "../public/info.png";

export default function Planner() {
  return (
    <div className="relative flex-1 min-h-[calc(100vh-200px)] flex w-full">
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-contain opacity-10 pointer-events-none select-none"
        style={{ backgroundImage: "url('/watermark.png')" }}
      />
      <div className="relative z-10 w-full flex pr-4 pl-4 pt-4 md:pl-10 md:pr-10 md:pt-10 xl:pr-20 xl:pl-20 xl:pt-6">
        <div className="flex flex-col w-full">
          <div className="flex pb-6 items-center">
            <Image
              src={info}
              alt="info"
              className="w-10 transition duration-[800ms] ease hover:scale-105"
            />
           <span className="text-sm transition duration-[800ms] ease hover:scale-101">Para começar, clique no botão abaixo e configure o seu Workflow.</span>
          </div>
          <button className="flex w-36 border-blue-900 border items-center pr-3 pl-1 pt-1 pb-1 rounded transition duration-[800ms] ease hover:scale-105 cursor-pointer gap">
            <Image
              src={add}
              alt="Add"
              className="w-6 h-6"
            />
            <span className="text-sm">Novo Workflow</span>
          </button>
        </div>
      </div>
    </div>
  );
}
  