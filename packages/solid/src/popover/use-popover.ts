import { useBaseProps } from '../base-props';
import { useClassNames } from '../class-names';
import { useTwMerge } from '../tw-merge';
import createAnimateState, {
  animateStatePreset,
} from '../create-animate-state';
import { createControlledSignal } from '../create-controlled-signal';
import { popoverSlots } from '@kedata-ui/slots/popover';
import * as popover from '@zag-js/popover';
import { normalizeProps, useMachine } from '@zag-js/solid';
import clsx from 'clsx';
import {
  createMemo,
  mergeProps,
  type ComponentProps,
  type ValidComponent,
} from 'solid-js';
import type { PopoverProps } from './index.types';
import type { PropsGetterParams } from '../types';

const defaultPopoverProps: Partial<PopoverProps> = {
  placement: 'bottom',
};

const usePopover = (inProps: PopoverProps) => {
  const props = useBaseProps('Popover', inProps, defaultPopoverProps);
  const classNames = useClassNames('Popover', props);
  const twMerge = useTwMerge();
  const [isOpen, setOpen] = createControlledSignal(
    () => props.isOpen,
    props.onIsOpenChange,
    props.initialIsOpen ?? false,
  );

  const close = () => setOpen(false);

  const { isPresence, animateState } = createAnimateState(isOpen);

  const service = useMachine(popover.machine, {
    get id() {
      return props.id;
    },
    get open() {
      return isOpen();
    },
    onOpenChange: (details) => {
      setOpen(details.open);
    },
    closeOnInteractOutside: true,
    closeOnEscape: true,
    onEscapeKeyDown: close,
    positioning: {
      get placement() {
        return props.placement;
      },
    },
  });

  const popoverApi = createMemo(() => popover.connect(service, normalizeProps));

  const slots = createMemo(() => popoverSlots());

  const getTriggerProps = <T extends ValidComponent = 'button'>(
    params: PropsGetterParams = {},
  ) => {
    return mergeProps(() => popoverApi().getTriggerProps(), {
      className: twMerge(
        clsx(slots().trigger(), classNames()?.trigger, params.class),
      ),
    }) as ComponentProps<T>;
  };

  const getPositionerProps = <T extends ValidComponent = 'div'>(
    params: PropsGetterParams = {},
  ) => {
    return mergeProps(() => popoverApi().getPositionerProps(), {
      className: twMerge(
        clsx(
          slots().positioner(),
          animateStatePreset.fadeUp.base,
          animateStatePreset.fadeUp[animateState()],
          classNames()?.positioner,
          params.class,
        ),
      ),
    }) as ComponentProps<T>;
  };

  const getContentProps = <T extends ValidComponent = 'div'>(
    params: PropsGetterParams = {},
  ) => {
    return mergeProps(
      () => ({
        ...popoverApi().getContentProps(),
        hidden: undefined,
      }),
      {
        className: twMerge(
          clsx(slots().content(), classNames()?.content, params.class),
        ),
      },
    ) as ComponentProps<T>;
  };

  return {
    isOpen,
    isPresence,
    children: props.children,
    content: props.content,
    close,

    getTriggerProps,
    getPositionerProps,
    getContentProps,
  };
};

export default usePopover;
