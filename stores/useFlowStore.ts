import { Edge, Node } from "react-flow-renderer";
import { create } from "zustand";

interface FlowState {
    nodes: Node[];
    edges: Edge[];
    setNodes: (nodes: Node[]) => void;
    setEdges: (edges: Edge[] | ((prev: Edge[]) => Edge[])) => void;
    addNode: (node: Node) => void;
    addEdge: (edge: Edge) => void;
    resetFlow: () => void;
}  

export const useFlowStore = create<FlowState>((set) => ({
  nodes: [],
  edges: [],
  setNodes: (nodes) => set({ nodes }),
  setEdges: (update) =>
    set((state) => ({
      edges: typeof update === "function" ? update(state.edges) : update,
    })),
  addNode: (node) =>
    set((state) => ({ nodes: [...state.nodes, node] })),
  addEdge: (edge) =>
    set((state) => ({ edges: [...state.edges, edge] })),
  resetFlow: () => set({ nodes: [], edges: [] }),
}));
