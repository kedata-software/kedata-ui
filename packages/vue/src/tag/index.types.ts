import type { ColorPalette, TagVariant } from "@kedata-ui/slots";

export type TagProps = {
  colorPalette?: ColorPalette;
  variant?: TagVariant;
  closeable?: boolean;
  withParts?: boolean;
  class?: string;
};
