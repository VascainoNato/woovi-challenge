import ApiNode from "../components/nodes/ApiNode";
import IfNode from "../components/nodes/IfNode";
import MessageNode from "../components/nodes/MessageNode";
import WebhookNode from "../components/nodes/WebhookNode";

export const nodeTypes = {
  api: ApiNode,
  webhook: WebhookNode,
  if: IfNode,
  message: MessageNode,
};