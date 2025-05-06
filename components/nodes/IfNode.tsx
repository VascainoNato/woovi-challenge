import { Handle, Position } from "react-flow-renderer";
import { useFlowStore } from "../../stores/useFlowStore";
import Image from "next/image";
import close from "../../public/close-white.png";
import { IfNodeProps } from "../../types/Ifnode";

export default function IfNode({ id, data }: IfNodeProps) {
  const { deleteNode } = useFlowStore();
  const isEntry = data?.isEntry;

  return (
    <div className="bg-yellow-400 border border-gray-500 rounded shadow-md min-w-[100px] pb-0.5">
    <span className="text-white font-small w-full pl-1">If (Condição) {isEntry ? '(Início)' : ''}</span>
    <button
      onClick={() => deleteNode(id)}
      className="absolute top-0 right-0.5 text-white rounded-bl"
    >
    <Image
      src={close}
      alt="Close"
      className="w-4 cursor-pointer"
    >
    </Image>
    </button>
        <Handle
        type="target"
        position={Position.Left}
        className="w-3 h-3 bg-blue-700"
    />
    <Handle
        type="source"
        position={Position.Right}
        id="true"
        className="w-3 h-3 bg-green-600"
        style={{ top: 10 }}
    />
    <Handle
        type="source"
        position={Position.Right}
        id="false"
        className="w-3 h-3 bg-red-600"
        style={{ top: 20 }}
    />
  </div>
  );
}
