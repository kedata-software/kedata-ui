import type { FormFieldLabelPlacement } from '@kedata-ui/slots';
import type { ComponentProps } from 'solid-js';

export type FormBaseProps = {
  labelPlacement?: FormFieldLabelPlacement;
  labelClass?: string;
};

export type FormProps = ComponentProps<'form'> & FormBaseProps;

export type UseFormParams = {
  props: FormProps;
};
