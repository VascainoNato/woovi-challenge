export interface MessageNodeProps {
    id: string;
    data?: {
      isEntry?: boolean;
      message?: string;
    };
}