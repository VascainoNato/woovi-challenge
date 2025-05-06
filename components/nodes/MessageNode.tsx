import { Handle, Position } from "react-flow-renderer";
import { useFlowStore } from "../../stores/useFlowStore";
import Image from "next/image";
import close from "../../public/close-white.png";
import { ChangeEvent } from "react";
import { MessageNodeProps } from "../../types/message";

export default function MessageNode({ id, data }: MessageNodeProps) {
  const { deleteNode, nodes, setNodes } = useFlowStore();
  const isEntry = data?.isEntry;
  const message = data?.message || "";

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newMessage = e.target.value;
    const updatedNodes = nodes.map((node) =>
      node.id === id
        ? {
            ...node,
            data: {
              ...node.data,
              message: newMessage,
            },
          }
        : node
    );
    setNodes(updatedNodes);
  };

  return (
    <div className="bg-purple-600 border border-gray-500 rounded shadow-md min-w-[100px] p-1 flex flex-col">
      <span className="text-white text-xs">Mensagem {isEntry ? "(Início)" : ""}</span>
      <button
        onClick={() => deleteNode(id)}
        className="absolute top-0 right-1 text-white text-sm"
      >
        <Image src={close} alt="Close" className="w-4 cursor-pointer" />
      </button>

      <textarea
        value={message}
        onChange={handleChange}
        placeholder="Digite a mensagem..."
        className="font-small rounded bg-purple-200 text-black resize-none p-1 outline-none"
        rows={1}
      />

      <Handle
        type="target"
        position={Position.Left}
        className="w-3 h-3 bg-purple-900 rounded-full"
      />
    </div>
  );
}
