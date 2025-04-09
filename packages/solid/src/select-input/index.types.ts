import type { Component, ComponentProps } from 'solid-js';
import type { WithInputProps } from '../input';
import type {
  ColorPalette,
  SelectFieldClassNames,
  SelectFieldIds,
} from '@kedata-ui/slots';

export type SelectInputOption = {
  label: string;
  value: any;
  disabled?: boolean;
  hidden?: boolean;
  icon?: Component;
  className?: string;
  classNames?: {
    root?: string;
    itemText?: string;
  };
};

type SelectSingleInputProps = {
  multiple?: false;
  value?: string;
  onValueChange?: (value: string) => void;
};

type SelectMultipleInputProps = {
  multiple: true;
  value?: string[];
  onValueChange?: (value: string[]) => void;
};

export type SelectInputBaseProps = WithInputProps & {
  id?: string;
  withSearch?: boolean;
  searchPlaceholder?: string;
  options?: SelectInputOption[];
  searchTerm?: string;
  onSearchChange?: (searchTerm: string) => void;
  clearSearchTermOnClose?: boolean;
  ids?: SelectFieldIds;
  colorPalette?: ColorPalette;
  classNames?: SelectFieldClassNames;
  withParts?: boolean;

  isOpen?: boolean;
  onOpenChange?: (isOpen: boolean) => void;

  closeOnSelect?: boolean;
};

export type SelectInputProps = ComponentProps<'div'> &
  SelectInputBaseProps &
  WithInputProps &
  (SelectSingleInputProps | SelectMultipleInputProps);

export type SelectInputRef = {
  focus: () => void;
  blur: () => void;
};
