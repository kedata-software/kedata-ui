import type { JSX } from 'solid-js';
import type { WithFieldProps } from '../types';
import type {
  CheckboxClassNames,
  CheckboxIds,
  ColorPalette,
} from '@kedata-ui/slots';

export type CheckboxBaseProps = WithFieldProps & {
  id?: string;
  rootId?: string;

  indeterminate?: boolean;
  checked?: boolean;
  initialChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;

  children?: JSX.Element;
  ids?: CheckboxIds;
  colorPalette?: ColorPalette;
  withParts?: boolean;

  class?: string;
  classNames?: CheckboxClassNames;
  ref?: CheckboxRef | ((ref: CheckboxRef) => void);
};

export type CheckboxProps = CheckboxBaseProps;

export type CheckboxRef = {
  focus: () => void;
  blur: () => void;
};
