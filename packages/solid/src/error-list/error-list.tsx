import { useBaseProps } from '../base-props';
import { useClassNames } from '../class-names';
import { useTwMerge } from '../tw-merge';
import { useColorPalette } from '../use-color-palette';
import { errorListSlots } from '@kedata-ui/slots/error-list';
import clsx from 'clsx';
import type { ErrorListProps } from './index.types';
import {
  createEffect,
  createMemo,
  For,
  splitProps,
  type Component,
} from 'solid-js';

const ErrorList: Component<ErrorListProps> = (inProps) => {
  const props = useBaseProps('ErrorList', inProps);
  const classNames = useClassNames('ErrorList', inProps);
  const twMerge = useTwMerge();
  const colorPaletteClassName = useColorPalette(
    () => props.colorPalette ?? 'danger',
  );

  const slots = createMemo(() => {
    return errorListSlots({ withParts: props.withParts });
  });

  const [, rootProps] = splitProps(props, omittedProps);

  return (
    <div
      ref={props.ref}
      {...rootProps}
      class={twMerge(
        clsx(
          colorPaletteClassName(),
          slots().root(),
          classNames()?.root,
          props.class,
        ),
      )}
    >
      <For each={props.errors}>
        {(error) => {
          const errorText = getErrorText(error);

          if (!errorText) return null;

          return (
            <div class={twMerge(clsx(slots().item(), classNames()?.item))}>
              {errorText}
            </div>
          );
        }}
      </For>
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
    return null;
  }

  if (typeof error === 'string') {
    return error;
  }

  return error.message;
};

export default ErrorList;

const omittedProps: Array<keyof ErrorListProps> = [
  'errors',
  'colorPalette',
  'id',
  'classNames',
  'withParts',
];
