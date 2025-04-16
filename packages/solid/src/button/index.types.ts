import type {
  ButtonClassNames,
  ButtonIds,
  ButtonSize,
  ButtonVariant,
  ColorPalette,
} from '@kedata-ui/slots';
import type { Component, ComponentProps, JSX } from 'solid-js';

export type ButtonBaseProps = {
  id?: string;
  children?: JSX.Element;

  classNames?: ButtonClassNames;
  scopeName?: string;
  colorPalette?: ColorPalette;
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  startIcon?: Component;
  endIcon?: Component;
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
