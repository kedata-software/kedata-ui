import { useBaseProps } from '../base-props';
import { useClassNames } from '../class-names';
import { useTwMerge } from '../tw-merge';
import { dialogHeaderSlots } from '@kedata-ui/slots/dialog-header';
import clsx from 'clsx';
import type { DialogHeaderProps } from './index.types';
import { useDialogContext } from './dialog-context';
import { omitProps } from '@kedata-software/toolkit-js';
import { createMemo, type ComponentProps, type ValidComponent } from 'solid-js';

const useDialogHeader = (inProps: DialogHeaderProps) => {
  const props = useBaseProps('DialogHeader', inProps);
  const classNames = useClassNames('DialogHeader', inProps);
  const dialogContext = useDialogContext();
  const twMerge = useTwMerge();

  const slots = createMemo(() => {
    return dialogHeaderSlots({ withParts: props.withParts });
  });

  const Component = 'header' as const;
  const showCloseIcon = props?.showCloseIcon ?? true;

  const getRootProps = <T extends ValidComponent = 'header'>(
    className?: string,
  ) => {
    return {
      ...omitProps(props, omittedProps),
      class: twMerge(
        clsx(slots().root(), classNames()?.root, props.class, className),
      ),
    } as ComponentProps<T>;
  };

  const getTitleProps = <T extends ValidComponent = 'span'>(
    className?: string,
  ) => {
    return {
      class: twMerge(clsx(slots().title(), classNames()?.title, className)),
    } as ComponentProps<T>;
  };

  const getCloseIconProps = <T extends ValidComponent = 'svg'>(
    className?: string,
  ) => {
    return {
      tabIndex: 0,
      onClick: () => {
        dialogContext?.close();
      },
      class: twMerge(
        clsx(slots().closeIcon(), classNames()?.closeIcon, className),
      ),
    } as ComponentProps<T>;
  };

  return {
    Component,
    title: props.title,
    showCloseIcon: createMemo(() => showCloseIcon),

    getRootProps,
    getTitleProps,
    getCloseIconProps,
  };
};

export default useDialogHeader;

const omittedProps: Array<keyof DialogHeaderProps> = [
  'title',
  'withParts',
  'classNames',
  'showCloseIcon',
];
