import type {
  BadgeClassNames,
  BadgeVariant,
  ColorPalette,
} from '@kedata-ui/slots';
import type { ComponentProps, JSXElement } from 'solid-js';

export type BadgeBaseProps = {
  withParts?: boolean;
  variant?: BadgeVariant;
  classNames?: BadgeClassNames;
  class?: string;
  children?: JSXElement;
  id?: string;
  colorPalette?: ColorPalette;
};

export type BadgeProps = ComponentProps<'div'> & BadgeBaseProps;
