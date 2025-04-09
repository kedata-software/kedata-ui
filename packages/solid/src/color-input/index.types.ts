import type { ComponentProps } from 'solid-js';
import type { WithInputProps } from '../input';
import type { WithFieldProps } from '../types';
import type { ColorInputClassNames } from '@kedata-ui/slots';

export type ColorInputBaseProps = WithFieldProps & {
  value?: string;
  initialValue?: string;
  onValueChange?: (value: string) => void;

  isOpen?: boolean;
  initialIsOpen?: boolean;
  onIsOpenChange?: (isOpen: boolean) => void;

  classNames?: ColorInputClassNames;
  placeholder?: string;
};

export type ColorInputProps = ColorInputBaseProps & ComponentProps<'div'>;

export type ColorInputRef = {
  focus: () => void;
  blur: () => void;
};
