import type { ColorPalette } from "@kedata-ui/slots";
import type { WithFieldProps } from "../types";
import type { ModelRef } from "vue";

export type RadioProps = WithFieldProps & {
  colorPalette?: ColorPalette;
  withParts?: boolean;
  class?: string;
  darkable?: boolean;
  value?: string;
};

export type RadioModels = {
  checked: ModelRef<boolean | string>;
};
