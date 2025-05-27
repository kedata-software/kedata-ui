import type { ModelRef } from "vue";
import type { WithFieldProps } from "../types";
import type { ColorPalette, TextInputClassNames } from "@kedata-ui/slots";

export type TextInputProps = WithFieldProps & {
  id?: string;
  rootId?: string;
  class?: string;
  placeholder?: string;
  colorPalette?: ColorPalette;
  withParts?: boolean;
  required?: boolean;
  classes?: TextInputClassNames;
  type?: "text" | "email" | "password" | "number" | "tel" | "url";
};

export type TextInputModels = {
  value: ModelRef<string>;
};
