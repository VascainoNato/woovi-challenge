import { Handle, Position } from "react-flow-renderer";

export default function WebhookNode() {
  return (
    <div className="p-3 woovie-color border border-gray-500 rounded shadow-md text-sm min-w-[140px]">
      <strong className="text-white">Webhook</strong>
      <Handle
        type="source"
        position={Position.Right}
        className="w-3 h-3 bg-blue-900 rounded-full"
      />
    </div>
  );
}
