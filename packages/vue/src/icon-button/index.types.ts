import type {
  ButtonSize,
  ButtonVariant,
  ColorPalette,
  IconButtonClassNames,
} from "@kedata-ui/slots";
import type { ButtonHTMLAttributes } from "vue";

export type IconButtonProps = {
  disabled?: boolean;
  colorPalette?: ColorPalette;
  variant?: ButtonVariant;
  size?: ButtonSize;
  withParts?: boolean;
  class?: string;
  type?: ButtonHTMLAttributes["type"];
  classes?: IconButtonClassNames;
};
