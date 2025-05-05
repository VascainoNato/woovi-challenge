import { ChallengeModalProps } from "../types/modals";
import Image from "next/image";
import exit from "../public/exit.png";

export default function ChallengeModal({ isOpen, onClose }: ChallengeModalProps) {
  if (!isOpen) return null;
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-30 backdrop-blur-sm">
        <div className="bg-white p-5 rounded-md shadow-2xl w-[90%] max-w-2xl relative md:w-[70%] lg-w-[60%] xl:w-[60%]">
          <div className="flex items-center w-full">
            <h2 className="text-xl text-blue-900 transition duration-[800ms] ease hover:scale-105 cursor-pointer font-semibold pb-4 w-full justify-center text-center">Challenge Woovi</h2>
            <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl"
          >
            <Image
              src={exit}
              alt="Close"
              className="w-11 transition duration-[800ms] ease hover:scale-105 cursor-pointer"
            >
            </Image>
          </button>
          </div>
          <div className="flex flex-col items-center justify-center w-full pr-4 pl-4 gap-5 pb-6 md:gap-4">
            <p className="text-normal transition duration-[800ms] ease hover:scale-105 cursor-pointer text-center">
              Este desafio consiste em desenvolver um Mini N8N/Zapier utilizando React Flow.
            </p>
            <p className="text-normal transition duration-[800ms] ease hover:scale-105 cursor-pointer text-center">O projeto deve conter no mínimo 2 nós, sendo eles: API e Webhook.</p>
          </div>
          <div className="flex w-full justify-center pb-2"> 
            <a href="https://github.com/woovibr/jobs" target='_blank' rel="noopener noreferrer" className="w-full justify-center flex">
              <button className="bg-blue-900 text-white h-10 w-[50%] rounded transition duration-[800ms] ease hover:scale-105 cursor-pointer md:w-[30%] text-md">Documentação</button>
            </a>
          </div>
        </div>
      </div>
    );
}