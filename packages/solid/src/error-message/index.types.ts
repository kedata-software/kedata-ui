import type { TestableProps } from '../types';
import type {
  ColorPalette,
  ErrorMessageClassNames,
} from '@kedata-ui/slots';
import type { ComponentProps } from 'solid-js';

export type WithErrorMessageProps = {
  error?: string | { message?: string } | Error | null | undefined;
};

export type ErrorMessageBaseProps = WithErrorMessageProps &
  TestableProps & {
    id?: string;
    for?: string;
    colorPalette?: ColorPalette;
    classNames?: ErrorMessageClassNames;
    withParts?: boolean;
  };

export type ErrorMessageProps = ComponentProps<'div'> & ErrorMessageBaseProps;
