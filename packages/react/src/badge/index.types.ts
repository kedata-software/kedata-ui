import type {
  BadgeClassNames,
  BadgeVariant,
  ColorPalette,
} from '@kedata-ui/slots';
import type React from 'react';
import type { ComponentProps } from 'react';

export type BadgeBaseProps = {
  withParts?: boolean;
  variant?: BadgeVariant;
  classNames?: BadgeClassNames;
  class?: string;
  children?: React.ReactNode;
  id?: string;
  colorPalette?: ColorPalette;
};

export type BadgeProps = ComponentProps<'div'> & BadgeBaseProps;
