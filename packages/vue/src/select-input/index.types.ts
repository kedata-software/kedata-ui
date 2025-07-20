import type { ModelRef } from 'vue';
import type { WithFieldProps } from '../types';
import type { SelectOption } from '../select-picker';
import type { ColorPalette } from '@kedata-ui/slots';

export type SelectInputProps = WithFieldProps & {
  mode?: 'single' | 'multiple' | undefined;
  placeholder?: string;
  closeOnSelect?: boolean;
  class?: string;
  options?: SelectOption[];
  colorPalette?: ColorPalette;
  withParts?: boolean;
  clearSearchTermOnClose?: boolean;
  withSearch?: boolean;
  searchPlaceholder?: string;
} & (
    | {
        mode: 'single';
        modelValue?: string;
      }
    | {
        mode: 'multiple';
        modelValue?: string[];
      }
  );

export type SelectInputModels = {
  value: ModelRef<string | string[]>;
  isOpen: ModelRef<boolean>;
  searchTerm: ModelRef<string>;
};
