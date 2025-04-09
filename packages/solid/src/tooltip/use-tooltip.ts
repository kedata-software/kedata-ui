import { useBaseProps } from '../base-props';
import { useClassNames } from '../class-names';
import { useTwMerge } from '../tw-merge';
import { createControlledSignal } from '../create-controlled-signal';
import { tooltipSlots } from '@kedata-ui/slots/tooltip';
import { normalizeProps, useMachine } from '@zag-js/solid';
import * as tooltip from '@zag-js/tooltip';
import clsx from 'clsx';
import {
  createMemo,
  mergeProps,
  type ComponentProps,
  type ValidComponent,
} from 'solid-js';
import type { TooltipProps } from './index.types';
import type { PropsGetterParams } from '../types';

const defaultTooltipProps: TooltipProps = {
  initialIsOpen: false,
};

const useTooltip = (inProps: TooltipProps) => {
  const props = useBaseProps('Tooltip', inProps, defaultTooltipProps);
  const classNames = useClassNames('Tooltip', inProps);
  const twMerge = useTwMerge();

  const [isOpen, setOpen] = createControlledSignal(
    () => props.isOpen,
    props.onIsOpenChange,
    props.initialIsOpen ?? false,
  );

  const service = useMachine(tooltip.machine, {
    id: props.id,
    get open() {
      return isOpen();
    },
    onOpenChange(details) {
      setOpen(details.open);
    },
    openDelay: 0,
    closeDelay: 0,
    positioning: {
      placement: 'top',
    },
  });

  const tooltipApi = createMemo(() => tooltip.connect(service, normalizeProps));

  const slots = createMemo(() => {
    return tooltipSlots({
      withParts: props.withParts,
    });
  });

  const getTriggerProps = () => {
    return tooltipApi().getTriggerProps();
  };

  const getContentProps = <T extends ValidComponent = 'div'>(
    params?: PropsGetterParams,
  ) => {
    return mergeProps(
      () => tooltipApi().getContentProps(),
      () => ({
        class: twMerge(
          clsx(slots().content(), classNames()?.content, params?.['className']),
        ),
      }),
    ) as ComponentProps<T>;
  };

  const getPositionerProps = <T extends ValidComponent = 'div'>(
    params?: PropsGetterParams,
  ) => {
    return mergeProps(
      () => tooltipApi().getPositionerProps(),
      () => ({
        class: twMerge(
          clsx(
            slots().positioner(),
            classNames()?.positioner,
            params?.className,
          ),
        ),
      }),
    ) as ComponentProps<T>;
  };

  const getArrowProps = <T extends ValidComponent = 'div'>(
    params?: PropsGetterParams,
  ) => {
    return mergeProps(
      () => {
        const arrowProps = tooltipApi().getArrowProps();
        return {
          ...arrowProps,
          style: {
            ...(arrowProps['style'] as any),
            '--arrow-size': '8px',
          },
        };
      },
      () => ({
        class: twMerge(
          clsx(slots().arrow(), classNames()?.arrow, params?.className),
        ),
      }),
    ) as ComponentProps<T>;
  };

  const getArrowTipProps = <T extends ValidComponent = 'div'>(
    params?: PropsGetterParams,
  ) => {
    return mergeProps(
      () => tooltipApi().getArrowTipProps(),
      () => ({
        class: twMerge(
          clsx(slots().arrowTip(), classNames()?.arrowTip, params?.className),
        ),
      }),
    ) as ComponentProps<T>;
  };

  return {
    isOpen,
    api: tooltipApi,
    content: props.content,
    children: props.children,

    getArrowProps,
    getArrowTipProps,
    getPositionerProps,
    getTriggerProps,
    getContentProps,
  };
};

export default useTooltip;
