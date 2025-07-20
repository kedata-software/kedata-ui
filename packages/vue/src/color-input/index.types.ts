import type { ModelRef } from 'vue';
import type { WithFieldProps } from '../types';
import type { ColorInputClassNames, ColorPalette } from '@kedata-ui/slots';

export type ColorInputBaseProps = WithFieldProps & {
  classNames?: ColorInputClassNames;
  placeholder?: string;
  class?: string;
  colorPalette?: ColorPalette;
  withParts?: boolean;
};

export type ColorInputModels = {
  value: ModelRef<string>;
  isOpen: ModelRef<boolean>;
};

export type ColorInputProps = ColorInputBaseProps;

export type ColorInputRef = {
  focus: () => void;
  blur: () => void;
};
