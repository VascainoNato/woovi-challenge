'use client'
import ReactFlow, { addEdge, applyEdgeChanges, applyNodeChanges, Background, Connection, Controls, EdgeChange, MiniMap, NodeChange, ReactFlowProvider } from "react-flow-renderer";
import { useFlowStore } from "../stores/useFlowStore";
import { nodeTypes } from "../stores/nodeTypes";

export default function Workflow() {
  const { nodes, edges, setNodes, setEdges } = useFlowStore();

  const onNodesChange = (changes: NodeChange[]) =>
    setNodes(applyNodeChanges(changes, nodes));

  const onEdgesChange = (changes: EdgeChange[]) =>
    setEdges(applyEdgeChanges(changes, edges));

  const onConnect = (connection: Connection) =>
    setEdges((prev) => addEdge(connection, prev));

  return (
    <ReactFlowProvider>
      <div className="h-[54vh] md:h-[60vh] w-full border border-gray-200 rounded-md overflow-hidden">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          fitView
        >
          <MiniMap className="hidden md:flex"/>
          <Controls />
          <Background />
        </ReactFlow>
      </div>
    </ReactFlowProvider>
  );
}
