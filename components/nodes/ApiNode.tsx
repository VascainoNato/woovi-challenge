import { Handle, Position } from "react-flow-renderer";

export default function ApiNode() {
  return (
    <div className="woovie-color border border-gray-500 rounded shadow-md min-w-[100px] pb-0.5">
      <span className="text-white text-xs w-full pl-2">API</span>
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
