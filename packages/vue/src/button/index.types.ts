import type { ButtonSize, ButtonVariant, ColorPalette } from "@kedata-ui/slots";
import type { ButtonHTMLAttributes } from "vue";

export type ButtonProps = {
  class?: string;
  disabled?: boolean;
  loading?: boolean;
  variant?: ButtonVariant;
  colorPalette?: ColorPalette;
  withParts?: boolean;
  size?: ButtonSize;
  type?: ButtonHTMLAttributes["type"];
};
