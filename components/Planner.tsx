'use client'
import Image from "next/image";
import add from "../public/add.png";
import info from "../public/info.png";
import { useFlowStore } from "../stores/useFlowStore";
import { useCreateNode } from "../hooks/useCreateNode";
import Workflow from "./Workflow";
import { useState } from "react";

export default function Planner() {
  const { addNode } = useFlowStore();
  const createNode = useCreateNode();
  const [showOptions, setShowOptions] = useState(false);

  const handleAddWorkflow = () => {
    setShowOptions((prev) => !prev);
  };

  const handleSelectType = (type: "webhook" | "api"| "if" | "message") => {
    const node = createNode(type);
    addNode(node);
    setShowOptions(false); 
  };

  return (
    <div className="relative flex-1 min-h-[calc(100vh-200px)] flex w-full">
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-contain opacity-10 pointer-events-none select-none"
        style={{ backgroundImage: "url('/watermark.png')" }}
      />
      <div className="relative z-10 w-full flex pr-4 pl-4 pt-4 md:pl-10 md:pr-10 md:pt-5 md:pb-10 xl:pr-20 xl:pl-20 xl:pb-20 xl:pt-10">
        <div className="flex flex-col w-full">
          <div className="flex pb-6 items-center">
            <Image
              src={info}
              alt="info"
              className="w-10 transition duration-[800ms] ease hover:scale-105"
            />
           <span className="text-sm transition duration-[800ms] ease hover:scale-101">To get started, click the button below and set up your Workflow.</span>
          </div>
          <button className="flex w-34 border-blue-900 border items-center pr-3 pl-1 pt-1 pb-1 rounded transition duration-[800ms] ease hover:scale-105 cursor-pointer gap" onClick={handleAddWorkflow}>
            <Image
              src={add}
              alt="Add"
              className="w-6 h-6"
            />
            <span className="text-sm">Add Item</span>
          </button>
          {showOptions && (
            <div className="absolute mt-24 w-34 bg-white border border-blue-200 rounded shadow-md flex flex-col z-50">
              <button
                onClick={() => handleSelectType("webhook")}
                className="px-4 py-2 text-sm text-blue-900 hover:bg-blue-900 hover:text-white cursor-pointer"
              >
                Webhook
              </button>
              <button
                onClick={() => handleSelectType("api")}
                className="px-4 py-2 text-sm text-blue-900 hover:bg-blue-900 hover:text-white cursor-pointer"
              >
                API
              </button>
              <button
                onClick={() => handleSelectType("if")}
                className="px-4 py-2 text-sm text-blue-900 hover:bg-blue-900 hover:text-white cursor-pointer"
              >
                If
              </button>
              <button
                onClick={() => handleSelectType("message")}
                className="px-4 py-2 text-sm text-blue-900 hover:bg-blue-900 hover:text-white cursor-pointer"
              >
                Message
              </button>
            </div>
          )}
          <div className="relative z-10 pt-6">
            <Workflow />
          </div>
        </div>
      </div>
    </div>
  );
}
  