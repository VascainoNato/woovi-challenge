import { Handle, Position } from "react-flow-renderer";
import { useFlowStore } from "../../stores/useFlowStore";
import close from "../../public/close-white.png";
import Image from "next/image";
import { WebhookNodeProps } from "../../types/webhook";

export default function WebhookNode({ id, data }: WebhookNodeProps) {
  const { deleteNode } = useFlowStore();
  const isEntry = data?.isEntry;
  return (
    <div className="woovie-color border border-gray-500 rounded shadow-md min-w-[100px] pb-0.5">
      <span className="text-white font-small w-full pl-1">Webhook {isEntry ? '(Início)' : ''}</span>
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
        className="w-3 h-3 bg-blue-700"
      />
    </div>
  );
}
