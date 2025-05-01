import type {
  ButtonClassNames,
  ButtonIds,
  ButtonSize,
  ButtonVariant,
  ColorPalette,
} from '@kedata-ui/slots';
import type { ComponentProps, ReactElement, ReactNode } from 'react';

export type ButtonBaseProps = {
  id?: string;
  children?: ReactNode;

  classNames?: ButtonClassNames;
  scopeName?: string;
  colorPalette?: ColorPalette;
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  ids?: ButtonIds;
  idAsRoot?: boolean;

  withParts?: boolean;
  darkable?: boolean;
  disabled?: boolean;
};

export type ButtonProps = ButtonBaseProps & ComponentProps<'button'>;

export type UseButtonParams = {
  props: ButtonProps;
};
