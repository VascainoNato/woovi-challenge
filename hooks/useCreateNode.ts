import { Node } from "react-flow-renderer";
import { v4 as uuidv4 } from "uuid";

export function useCreateNode() {
  return (type: "webhook" | "api" | "if" | "message" ): Node => ({
    id: uuidv4(),
    type,
    position: {
      x: Math.random() * 300,
      y: Math.random() * 300,
    },
    data: {},
  });
}