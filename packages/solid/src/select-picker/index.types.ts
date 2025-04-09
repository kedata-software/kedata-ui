import type { SelectPickerClassNames } from '@kedata-ui/slots';
import type { Component, ComponentProps } from 'solid-js';

export type SelectPickerOption = {
  label: string;
  value: any;
  disabled?: boolean;
  hidden?: boolean;
  icon?: Component<Record<string, any>>;
  className?: string;
  classNames?: {
    root?: string;
    itemText?: string;
  };
};

export type SelectPickerBaseProps = {
  value?: string[];
  initialValue?: string[];
  onValueChange?: (value: string[]) => void;
  options?: SelectPickerOption[];
  classNames?: SelectPickerClassNames;
  searchTerm?: string;
  onSearchTermChange?: (searchTerm: string) => void;
  withSearch?: boolean;
  searchable?: boolean;
  searchPlaceholder?: string;

  onRequestClose?: () => void;
};

export type SelectPickerProps = ComponentProps<'div'> & SelectPickerBaseProps;

export type SelectPickerRef = HTMLDivElement;
