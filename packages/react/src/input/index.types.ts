import type { ReactElement, ReactNode } from 'react';
import type { WithFieldProps } from '../types';

export type WithInputProps = WithFieldProps & {
  id?: string;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  startAddon?: ReactNode;
  endAddon?: ReactNode;
  required?: boolean;
  placeholder?: string;
  invalid?: boolean;
};

export type UseInputParams = {
  props: WithInputProps;
};
