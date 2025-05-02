import { useBaseProps } from '../base-props';
import { useClassNames } from '../class-names';
import { useTwMerge } from '../tw-merge';
import { useControlledSignal } from '../use-controlled-signal';
import { tooltipSlots } from '@kedata-ui/slots/tooltip';
import { normalizeProps, useMachine } from '@zag-js/solid';
import * as tooltip from '@zag-js/tooltip';
import clsx from 'clsx';
import type { TooltipProps } from './index.types';
import type { PropsGetterParams } from '../types';
import { useMemo, type ComponentProps } from 'react';

const defaultTooltipProps: TooltipProps = {
  initialIsOpen: false,
};

const useTooltip = (inProps: TooltipProps) => {
  const props = useBaseProps('Tooltip', inProps, defaultTooltipProps);
  const classNames = useClassNames('Tooltip', inProps);
  const twMerge = useTwMerge();

  const [isOpen, setOpen] = useControlledSignal(
    props.isOpen,
    props.onIsOpenChange,
    props.initialIsOpen ?? false,
  );

  const service = useMachine(tooltip.machine, {
    id: props.id,
    open: isOpen,
    onOpenChange(details) {
      setOpen(details.open);
    },
    openDelay: 0,
    closeDelay: 0,
    positioning: {
      placement: 'top',
    },
  });

  const tooltipApi = tooltip.connect(service, normalizeProps);

  const slots = useMemo(() => {
    return tooltipSlots({
      withParts: props.withParts,
    });
  }, [props.withParts]);

  const getTriggerProps = () => {
    return tooltipApi.getTriggerProps();
  };

  const getContentProps = <T extends keyof JSX.IntrinsicElements = 'div'>(
    params?: PropsGetterParams,
  ) => {
    return {
      ...tooltipApi.getContentProps(),
      className: twMerge(
        clsx(slots.content(), classNames?.content, params?.className),
      ),
    } as ComponentProps<T>;
  };

  const getPositionerProps = <T extends keyof JSX.IntrinsicElements = 'div'>(
    params?: PropsGetterParams,
  ) => {
    return {
      ...tooltipApi.getPositionerProps(),
      className: twMerge(
        clsx(slots.positioner(), classNames?.positioner, params?.className),
      ),
    } as ComponentProps<T>;
  };

  const getArrowProps = <T extends keyof JSX.IntrinsicElements = 'div'>(
    params?: PropsGetterParams,
  ) => {
    const arrowProps = tooltipApi.getArrowProps();
    return {
      ...arrowProps,
      style: {
        ...(arrowProps['style'] as any),
        '--arrow-size': '8px',
      },
      className: twMerge(
        clsx(slots.arrow(), classNames?.arrow, params?.className),
      ),
    } as ComponentProps<T>;
  };

  const getArrowTipProps = <T extends keyof JSX.IntrinsicElements = 'div'>(
    params?: PropsGetterParams,
  ) => {
    return {
      ...tooltipApi.getArrowTipProps(),
      className: twMerge(
        clsx(slots.arrowTip(), classNames?.arrowTip, params?.className),
      ),
    } as ComponentProps<T>;
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
