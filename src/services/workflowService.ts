import { Edge, Node } from "react-flow-renderer";

export function markEntryNodes(nodes: Node[], edges: Edge[]): Node[] {
  const targets = edges.map((e) => e.target);

  return nodes.map((node) => {
    const isEntry = !targets.includes(node.id);
    if (node.data?.isEntry === isEntry) return node;
    return {
      ...node,
      data: {
        ...node.data,
        isEntry,
      },
    };
  });
}

export function getEntryNodes(nodes: Node[], edges: Edge[]): Node[] {
  const targets = edges.map((e) => e.target);
  return nodes.filter((node) => !targets.includes(node.id));
}

export function markFirstEntryNode(nodes: Node[], edges: Edge[]): Node[] {
  const targets = edges.map((e) => e.target);
  const entryNodes = nodes.filter((node) => !targets.includes(node.id));
  const firstEntryId = entryNodes.length > 0 ? entryNodes[0].id : null;

  return nodes.map((node) => ({
    ...node,
    data: {
      ...node.data,
      isEntry: node.id === firstEntryId,
    },
  }));
}
