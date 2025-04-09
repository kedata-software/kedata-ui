import type { Component } from 'solid-js';
import type { TestableProps, WithFieldProps } from '../types';

export type WithInputProps = WithFieldProps & {
  id?: string;
  startIcon?: Component<Record<string, any>>;
  endIcon?: Component<Record<string, any>>;
  startAddon?: Component<Record<string, any>>;
  endAddon?: Component<Record<string, any>>;
  required?: boolean;
  placeholder?: string;
  invalid?: boolean;
};

export type UseInputParams = {
  props: WithInputProps;
};
