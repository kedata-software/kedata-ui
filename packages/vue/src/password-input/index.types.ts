import type { ModelRef } from "vue";
import type { TextInputModels, TextInputProps } from "../text-input";

export type PasswordInputProps = Omit<TextInputProps, "type">;

export type PasswordInputModels = TextInputModels & {
  isVisible: ModelRef<boolean>;
};
