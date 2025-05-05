import { Handle, Position } from "react-flow-renderer";

export default function ApiNode() {
  return (
    <div className="p-3 bg-blue-100 border border-blue-500 rounded shadow-md text-sm min-w-[120px]">
      <strong className="text-blue-800">API</strong>

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
