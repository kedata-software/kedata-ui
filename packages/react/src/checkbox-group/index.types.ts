import type { ReactElement, ReactNode } from 'react';
import type { WithFieldProps } from '../types';

export type CheckboxGroupBaseProps = WithFieldProps & {
  children?: ReactNode;
  value?: string[];
  onValueChange?: (value: string[]) => void;
  initialValue?: string[];
};

export type CheckboxGroupItemBaseProps = Omit<WithFieldProps, 'name'> & {
  checked?: boolean;
  value: string;
  onCheckedChange?: (value: boolean) => void;
  /**
   * @clone
   */
  children: ReactElement<{
    value: string;
    checked?: boolean | undefined;
    onCheckedChange?: (value: boolean) => void;
  }>;
};

export type CheckboxGroupProps = CheckboxGroupBaseProps;
export type CheckboxGroupItemProps = CheckboxGroupItemBaseProps;

export type CheckboxGroupContextValue = WithFieldProps & {
  value: string[];
  isChecked: (val: string) => boolean;
  toggleValue: (val: string) => void;
};
