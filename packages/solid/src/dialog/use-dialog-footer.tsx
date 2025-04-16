import { useBaseProps } from '../base-props';
import { useClassNames } from '../class-names';
import { useTwMerge } from '../tw-merge';
import { dialogFooterSlots } from '@kedata-ui/slots/dialog-footer';
import clsx from 'clsx';
import {
  createMemo,
  splitProps,
  type ComponentProps,
  type ValidComponent,
} from 'solid-js';
import type { DialogFooterProps } from './index.types';

const useDialogFooter = (inProps: DialogFooterProps) => {
  const props = useBaseProps('DialogFooter', inProps);
  const classNames = useClassNames('DialogFooter', inProps);
  const twMerge = useTwMerge();

  const slots = createMemo(() => {
    return dialogFooterSlots({
      withParts: props.withParts,
      darkable: props.darkable,
    });
  });

  const Component = 'footer' as const;

  const [, rootProps] = splitProps(props, omittedProps);

  const getRootProps = <T extends ValidComponent = 'footer'>(
    className?: string,
  ) => {
    return {
      ...rootProps,
      class: twMerge(
        clsx(slots().root(), classNames()?.root, props.class, className),
      ),
    } as ComponentProps<T>;
  };

  return {
    Component,

    getRootProps,
  };
};

export default useDialogFooter;

const omittedProps: Array<keyof DialogFooterProps> = [
  'withParts',
  'classNames',
];
