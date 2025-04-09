import type { ComponentProps } from 'solid-js';

export type FormBaseProps = {
  labelPlacement?: 'top' | 'left';
  labelClass?: string;
};

export type FormProps = ComponentProps<'form'> & FormBaseProps;

export type UseFormParams = {
  props: FormProps;
};
