import { useBaseProps } from '../base-props';
import { useClassNames } from '../class-names';
import { useTwMerge } from '../tw-merge';
import { chatBubbleSlots } from '@kedata-ui/slots/chat-bubble';
import clsx from 'clsx';
import type { ChatBubbleProps } from './index.types';
import type { PropsGetterParams } from '../types';
import {
  createMemo,
  mergeProps,
  splitProps,
  type ComponentProps,
  type ValidComponent,
} from 'solid-js';

const defaultChatBubbleProps: ChatBubbleProps = {
  variant: 'question',
};

const useChatBubble = (inProps: ChatBubbleProps) => {
  const props = useBaseProps('ChatBubble', inProps, defaultChatBubbleProps);
  const classes = useClassNames('ChatBubble', props);
  const twMerge = useTwMerge();
  const [, rootProps] = splitProps(props, omittedProps);

  const slots = createMemo(() => {
    return chatBubbleSlots({
      withParts: props.withParts,
      variant: props.variant,
    });
  });

  const isFooterVisible = () => !!props.time;

  const dataAttrs = createMemo(() => ({
    'data-variant': props.variant,
  }));

  const getRootProps = <T extends ValidComponent = 'div'>(
    params: PropsGetterParams = {},
  ) => {
    return mergeProps(
      () => dataAttrs(),
      () => rootProps,
      () => ({
        class: twMerge(
          clsx(slots().root(), classes()?.root, props.class, params.class),
        ),
      }),
    ) as ComponentProps<T>;
  };

  const getBubbleProps = <T extends ValidComponent = 'div'>(
    params: PropsGetterParams = {},
  ) => {
    return mergeProps(
      () => dataAttrs(),
      () => ({
        class: twMerge(clsx(slots().bubble(), classes()?.bubble, params.class)),
        children: props.children,
      }),
    ) as ComponentProps<T>;
  };

  const getTimeProps = <T extends ValidComponent = 'div'>(
    params: PropsGetterParams = {},
  ) => {
    return mergeProps(
      () => dataAttrs(),
      () => ({
        class: twMerge(clsx(slots().time(), classes()?.time, params.class)),
      }),
    ) as ComponentProps<T>;
  };

  const getFooterProps = <T extends ValidComponent = 'div'>(
    params: PropsGetterParams = {},
  ) => {
    return mergeProps(
      () => dataAttrs(),
      () => ({
        class: twMerge(clsx(slots().footer(), classes()?.footer, params.class)),
      }),
    ) as ComponentProps<T>;
  };

  return {
    time: () => props.time,
    variant: () => props.variant,
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
