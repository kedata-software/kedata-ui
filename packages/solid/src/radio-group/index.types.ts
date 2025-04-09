import type { RadioGroupClassNames } from '@kedata-ui/slots';
import type { TestableProps } from '../types';
import type { Component, ComponentProps } from 'solid-js';

export type RadioGroupRef = {
  focus: () => void;
  blur: () => void;
};

export type RadioGroupBaseProps = TestableProps & {
  name: string;
  value?: string;
  initialValue?: string;
  onValueChange?: (value: string) => void;
  readOnly?: boolean;
  disabled?: boolean;
  invalid?: boolean;
  orientation?: 'vertical' | 'horizontal';

  classNames?: RadioGroupClassNames;
  withParts?: boolean;
};

export type RadioGroupItemBaseProps = {
  value: string;
  checked?: boolean;
  disabled?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  children: Component<{
    name?: string;
    disabled?: boolean;
    readOnly?: boolean;
    invalid?: boolean;
    checked?: boolean;
    onCheckedChange?: (checked: boolean) => void;
    value: string;
  }>;
  name?: string;
};

export type RadioGroupItemProps = RadioGroupItemBaseProps;
export type RadioGroupProps = ComponentProps<'div'> & RadioGroupBaseProps;
