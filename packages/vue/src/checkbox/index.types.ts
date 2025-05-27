import type { ColorPalette } from "@kedata-ui/slots";
import type { ModelRef } from "vue";

export type CheckboxProps = {
  indeterminate?: boolean;
  invalid?: boolean;
  disabled?: boolean;
  readOnly?: boolean;

  colorPalette?: ColorPalette;
  withParts?: boolean;

  class?: string;
  name?: string;
  value?: string;
};

export type CheckboxModels = {
  checked: ModelRef<boolean | string[]>;
};
