import type { ColorPalette, PinInputClassNames } from '@kedata-ui/slots';
import type { ComponentProps } from 'solid-js';

export type PinInputBaseProps = {
  value?: string[];
  initialValue?: string[];
  onValueChange?: (value: string[]) => void;

  colorPalette?: ColorPalette;

  /**
   * @default true
   */
  blurOnComplete?: boolean;

  /**
   * The number of pins to display
   * @default 6
   */
  count?: number;

  /**
   * @description
   * Set to `true` to set type input to `password`
   *
   * Set to `false` to set type input to `text`
   *
   * @default false
   */
  mask?: boolean;

  disabled?: boolean;
  invalid?: boolean;
  readOnly?: boolean;

  /**
   * @default 'numeric'
   */
  inputmode?: 'numeric' | 'text';
  classNames?: PinInputClassNames;
};

export type PinInputProps = ComponentProps<'div'> & PinInputBaseProps;
