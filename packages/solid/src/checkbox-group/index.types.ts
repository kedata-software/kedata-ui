import type { WithFieldProps } from '../types';
import type { Component, JSX } from 'solid-js';

export type CheckboxGroupBaseProps = WithFieldProps & {
  children?: JSX.Element;
  value?: string[];
  onValueChange?: (value: string[]) => void;
  initialValue?: string[];
};

export type CheckboxGroupItemBaseProps = Omit<WithFieldProps, 'name'> & {
  checked?: boolean;
  value: string;
  onCheckedChange?: (value: boolean) => void;
  children: Component<{
    checked?: boolean;
    onCheckedChange?: (value: boolean) => void;
    value: string;
  }>;
};

export type CheckboxGroupProps = CheckboxGroupBaseProps;
export type CheckboxGroupItemProps = CheckboxGroupItemBaseProps;

export type CheckboxGroupContextValue = WithFieldProps & {
  value: string[];
  isChecked: (val: string) => boolean;
  toggleValue: (val: string) => void;
};
