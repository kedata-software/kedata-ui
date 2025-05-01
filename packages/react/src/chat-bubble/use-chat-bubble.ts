import { useBaseProps } from '../base-props';
import { useClassNames } from '../class-names';
import { useTwMerge } from '../tw-merge';
import { chatBubbleSlots } from '@kedata-ui/slots/chat-bubble';
import clsx from 'clsx';
import type { ChatBubbleProps } from './index.types';
import type { PropsGetterParams } from '../types';
import { omitProps } from '@kedata-software/toolkit-js';
import { useMemo, type ComponentProps } from 'react';

const defaultChatBubbleProps: ChatBubbleProps = {
  variant: 'question',
};

const useChatBubble = (inProps: ChatBubbleProps) => {
  const props = useBaseProps('ChatBubble', inProps, defaultChatBubbleProps);
  const classNames = useClassNames('ChatBubble', props);
  const twMerge = useTwMerge();
  const rootProps = omitProps(props, omittedProps);

  const slots = useMemo(() => {
    return chatBubbleSlots({
      withParts: props.withParts,
      variant: props.variant,
    });
  }, [props.withParts, props.variant]);

  const isFooterVisible = !!props.time;

  const dataAttrs = useMemo(
    () => ({
      'data-variant': props.variant,
    }),
    [props.variant],
  );

  const getRootProps = <T extends keyof JSX.IntrinsicElements = 'div'>(
    params: PropsGetterParams = {},
  ) => {
    return {
      ...dataAttrs,
      ...rootProps,
      className: twMerge(
        clsx(slots.root(), classNames?.root, props.class, params.className),
      ),
    } as ComponentProps<T>;
  };

  const getBubbleProps = <T extends keyof JSX.IntrinsicElements = 'div'>(
    params: PropsGetterParams = {},
  ) => {
    return {
      ...dataAttrs,
      className: twMerge(
        clsx(slots.bubble(), classNames?.bubble, params.className),
      ),
      children: props.children,
    } as ComponentProps<T>;
  };

  const getTimeProps = <T extends keyof JSX.IntrinsicElements = 'div'>(
    params: PropsGetterParams = {},
  ) => {
    return {
      ...dataAttrs,
      className: twMerge(
        clsx(slots.time(), classNames?.time, params.className),
      ),
    } as ComponentProps<T>;
  };

  const getFooterProps = <T extends keyof JSX.IntrinsicElements = 'div'>(
    params: PropsGetterParams = {},
  ) => {
    return {
      ...dataAttrs,
      className: twMerge(
        clsx(slots.footer(), classNames?.footer, params.className),
      ),
    } as ComponentProps<T>;
  };

  return {
    time: props.time,
    variant: props.variant,
    isFooterVisible,

    getRootProps,
    getBubbleProps,
    getTimeProps,
    getFooterProps,
  };
};

export default useChatBubble;

const omittedProps: Array<keyof Omit<ChatBubbleProps, 'ref'>> = [
  'variant',
  'time',
  'classNames',
  'role',
];
