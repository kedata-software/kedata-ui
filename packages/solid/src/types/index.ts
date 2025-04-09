import type { JSX } from 'solid-js';

export type PropsGetterParams = {
  className?: string;
  style?: JSX.CSSProperties;
};

export type TestableProps = {
  'data-testid'?: string;
};

export type WithFieldProps = {
  name?: string;
  disabled?: boolean;
  invalid?: boolean;
  readOnly?: boolean;
};
