import React, { useMemo } from 'react';
import { useBaseProps } from '../base-props';
import { useClassNames } from '../class-names';
import { useTwMerge } from '../tw-merge';
import { useColorPalette } from '../use-color-palette';
import { errorMessageSlots } from '@kedata-ui/slots/error-message';
import clsx from 'clsx';
import type { ErrorMessageProps } from './index.types';
import type { FC } from 'react';
import { omitProps } from '@kedata-software/toolkit-js';

const ErrorMessage: FC<ErrorMessageProps> = (inProps) => {
  const props = useBaseProps('ErroMessage', inProps);
  const classNames = useClassNames('ErrorMessage', inProps);
  const twMerge = useTwMerge();
  const colorPaletteClassName = useColorPalette(props.colorPalette, 'danger');

  const slots = useMemo(() => {
    return errorMessageSlots({ withParts: props.withParts });
  }, [props.withParts]);

  const rootProps = omitProps(props, omittedProps);

  const errorText = useMemo(() => getErrorText(props.error), [props.error]);

  return (
    <div
      {...rootProps}
      id={props.for ? `${props.for}__error-message` : props.id}
      className={twMerge(
        clsx(
          colorPaletteClassName,
          slots.root(),
          classNames?.root,
          props.className,
        ),
      )}
    >
      <div className={twMerge(clsx(slots.content(), classNames?.content))}>
        {errorText}
      </div>
    </div>
  );
};

const getErrorText = (
  error: string | null | undefined | { message?: string } | Error,
) => {
  if (error instanceof Error) {
    return error.message;
  }

  if (!error) {
    return undefined;
  }

  if (typeof error === 'string') {
    return error;
  }

  return error.message;
};

export default ErrorMessage;

const omittedProps: Array<keyof ErrorMessageProps> = [
  'error',
  'colorPalette',
  'id',
  'for',
  'classNames',
  'withParts',
];
