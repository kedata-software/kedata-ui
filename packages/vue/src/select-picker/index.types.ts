import type { ModelRef, VNode } from "vue";

export type SelectOption = {
  label: string;
  value: any;
  disabled?: boolean;
  hidden?: boolean;
  icon?: () => VNode;
  class?: string;
  classes?: {
    root?: string;
    itemText?: string;
  };
};

export type SelectPickerProps = {
  class?: string;
  options?: SelectOption[];
  withSearch?: boolean;
  searchable?: boolean;
  searchPlaceholder?: string;
};

export type SelectPickerModels = {
  value: ModelRef<string[]>;
  searchTerm: ModelRef<string>;
};
