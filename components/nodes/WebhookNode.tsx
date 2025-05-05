import { Handle, Position } from "react-flow-renderer";

export default function WebhookNode() {
  return (
    <div className="p-3 bg-green-100 border border-green-600 rounded shadow-md text-sm min-w-[140px]">
      <strong className="text-green-800">Webhook</strong>

      <Handle
        type="source"
        position={Position.Right}
        className="w-3 h-3 bg-green-600"
      />
    </div>
  );
}
