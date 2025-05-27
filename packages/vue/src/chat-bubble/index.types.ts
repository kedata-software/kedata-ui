import type { ChatBubbleVariant } from "@kedata-ui/slots";

export type ChatBubbleProps = {
  id?: string;
  withParts?: boolean;
  variant?: ChatBubbleVariant;
  time?: string;
  class?: string;
};
