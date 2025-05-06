export interface IfNodeProps {
  id: string;
  data?: {
    isEntry?: boolean;
    condition?: string;
  };
}