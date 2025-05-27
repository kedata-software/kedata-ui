import type { BadgeVariant, ColorPalette } from "@kedata-ui/slots";

export type BadgeProps = {
  class?: string;
  withParts?: boolean;
  variant?: BadgeVariant;
  colorPalette?: ColorPalette;
};
