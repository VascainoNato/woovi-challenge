'use client'
import ReactFlow, { addEdge, applyEdgeChanges, applyNodeChanges, Background, Connection, Controls, EdgeChange, MiniMap, NodeChange, ReactFlowProvider } from "react-flow-renderer";
import { useFlowStore } from "../stores/useFlowStore";
import { nodeTypes } from "../stores/nodeTypes";
import { markEntryNodes, markFirstEntryNode } from "@/services/workflowService";
import { useEffect } from "react";

export default function Workflow() {
  const { nodes, edges, setNodes, setEdges } = useFlowStore();

  const onNodesChange = (changes: NodeChange[]) => {
    const updatedNodes = applyNodeChanges(changes, nodes);
    if (JSON.stringify(updatedNodes) !== JSON.stringify(nodes)) {
      setNodes(updatedNodes);
    }
  };

  const onEdgesChange = (changes: EdgeChange[]) => {
    const updatedEdges = applyEdgeChanges(changes, edges);
    const updatedNodes = markEntryNodes(nodes, updatedEdges);
    setEdges(updatedEdges); 
    if (JSON.stringify(nodes) !== JSON.stringify(updatedNodes)) {
      setNodes(updatedNodes);
    }
  };

  const onConnect = (connection: Connection) =>
    setEdges((prev) => addEdge(connection, prev));

  useEffect(() => {
    const updatedNodes = markFirstEntryNode(nodes, edges);
    setNodes(updatedNodes);
  }, [edges, nodes.length]);

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
