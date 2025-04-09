import { useBaseProps } from '../base-props';
import { useClassNames } from '../class-names';
import { useTwMerge } from '../tw-merge';
import { dialogBodySlots } from '@kedata-ui/slots/dialog-body';
import clsx from 'clsx';
import type { DialogBodyProps } from './index.types';
import {
  createMemo,
  splitProps,
  type ComponentProps,
  type ValidComponent,
} from 'solid-js';

const useDialogBody = (inProps: DialogBodyProps) => {
  const props = useBaseProps('DialogBody', inProps);
  const classNames = useClassNames('DialogBody', inProps);
  const twMerge = useTwMerge();

  const slots = createMemo(() => {
    return dialogBodySlots({
      withParts: props.withParts,
    });
  });

  const [, rootProps] = splitProps(props, omittedProps);

  const getRootProps = <T extends ValidComponent = 'div'>(
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
    getRootProps,
  };
};

export default useDialogBody;

const omittedProps: Array<keyof DialogBodyProps> = ['withParts', 'classNames'];
