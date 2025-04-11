import type {
  ColorPalette,
  SwalToastClassNames,
  SwalToastIds,
} from '@kedata-ui/slots';
import type { Component } from 'solid-js';
import type { ClassNameValue } from 'tailwind-merge';

export type SwalToastBaseProps = {
  id?: string;
  ids?: SwalToastIds;
  colorPalette?: ColorPalette;
  text: Component;
  withParts?: boolean;
  icon?: Component;
  /**
   * @description Timeout in milliseconds
   * @default 3000
   */
  timeout?: number;
};

export type SwalToastFireProps = SwalToastBaseProps & {
  classes?: SwalToastClassNames;
  twMerge?: (...inputs: ClassNameValue[]) => string;
};
