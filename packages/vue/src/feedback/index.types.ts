import type { ColorPalette } from "@kedata-ui/slots";

export type FeedbackPreset = "success" | "error" | "warning";

export type FeedbackProps = {
  withParts?: boolean;
  class?: string;
  colorPalette?: ColorPalette;
  preset?: FeedbackPreset;
};
