import type { TestableProps } from '../types';
import type { ColorPalette, RadioClassNames, RadioIds } from '@kedata-ui/slots';
import type { ComponentProps, JSX } from 'solid-js';

export type RadioBaseProps = TestableProps & {
  name?: string;
  label?: JSX.Element;
  description?: JSX.Element;

  onCheckedChange?: (checked: boolean) => void;
  checked?: boolean;
  initialChecked?: boolean;
  disabled?: boolean;
  invalid?: boolean;
  readOnly?: boolean;

  colorPalette?: ColorPalette;
  ids?: RadioIds;
  classNames?: RadioClassNames;

  withParts?: boolean;
  darkable?: boolean;

  value?: string;
};

export type RadioRef = {
  focus: () => void;
  blur: () => void;
};

export type RadioProps = Omit<ComponentProps<'label'>, 'ref'> & RadioBaseProps;
