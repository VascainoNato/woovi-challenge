import { Handle, Position } from "react-flow-renderer";
import { useFlowStore } from "../../stores/useFlowStore";
import close from "../../public/close-white.png";
import Image from "next/image";
import { WebhookNodeProps } from "../../types/webhook";

export default function WebhookNode({ id }: WebhookNodeProps) {
  const { deleteNode } = useFlowStore();
  return (
    <div className="woovie-color border border-gray-500 rounded shadow-md min-w-[100px] pb-0.5">
      <span className="text-white text-xs w-full pl-2">Webhook</span>
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
        type="source"
        position={Position.Right}
        className="w-3 h-3 bg-blue-900 rounded-full"
      />
    </div>
  );
}
