import type { ModelRef } from "vue";

export type PopoverProps = {
  class?: string;
  withParts?: boolean;
};

export type PopoverModels = {
  open: ModelRef<boolean>;
};
