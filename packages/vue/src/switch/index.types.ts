import type { ModelRef } from "vue";
import type { WithFieldProps } from "../types";
import type { ColorPalette } from "@kedata-ui/slots";

export type SwitchProps = WithFieldProps & {
  value?: string;
  withParts?: boolean;
  colorPalette?: ColorPalette;
  class?: string;
};

export type SwitchModels = {
  checked: ModelRef<boolean>;
};
