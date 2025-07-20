import type { ModelRef } from "vue";

export type ColorPickerProps = {
  class?: string;
  /**
   * @description
   * The color swatches to display.
   */
  swatches?: string[];
  withParts?: boolean;
};

export type ColorPickerModels = {
  value: ModelRef<string>;
};
