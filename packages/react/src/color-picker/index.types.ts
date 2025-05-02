import type { ColorPickerClassNames } from '@kedata-ui/slots';
import type { ComponentProps } from 'react';

export type ColorPickerBaseProps = {
  value?: string;
  initialValue?: string;
  onValueChange?: (value: string) => void;
  onValueChangeEnd?: (value: string) => void;
  onRequestClose?: () => void;
  classNames?: ColorPickerClassNames;

  /**
   * @description
   * The color swatches to display.
   */
  swatches?: string[];
};

export type ColorPickerProps = ColorPickerBaseProps & ComponentProps<'div'>;
