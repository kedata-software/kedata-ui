import type { WithLabelProps } from '../label';
import type { ComponentProps, JSX } from 'solid-js';
import type {
  FormFieldClassNames,
  FormFieldIds,
  FormFieldLabelPlacement,
} from '@kedata-ui/slots';
import type { WithErrorMessageProps } from '../error-message';

export type FormFieldBaseProps = {
  label?: string;
  helperText?: JSX.Element;
  ids?: FormFieldIds;
  classNames?: FormFieldClassNames;
  labelPlacement?: FormFieldLabelPlacement;
  for?: string;
};

export type FormFieldProps = Omit<ComponentProps<'div'>, 'children'> &
  WithLabelProps &
  WithErrorMessageProps &
  FormFieldBaseProps & {
    children: JSX.Element;
  };
