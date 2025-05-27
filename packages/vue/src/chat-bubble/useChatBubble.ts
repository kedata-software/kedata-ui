import { chatBubbleSlots } from '@kedata-ui/slots';
import { computed, type HTMLAttributes } from 'vue';
import type { ChatBubbleProps } from './index.types';

const useChatBubble = (props: ChatBubbleProps) => {
  const slots = computed(() => {
    return chatBubbleSlots({
      withParts: props.withParts,
      variant: props.variant,
    });
  });
  const dataAttrs = computed(() => {
    return {
      'data-variant': props.variant,
    };
  });
  const isFooterVisible = computed(() => !!props.time);
  const time = computed(() => props.time);

  const getRootProps = () => {
    return {
      ...dataAttrs.value,
      class: [slots.value.root(), props.class],
    } as HTMLAttributes;
  };

  const getBubbleProps = () => {
    return {
      ...dataAttrs.value,
      class: slots.value.bubble(),
    } as HTMLAttributes;
  };

  const getTimeProps = () => {
    return {
      ...dataAttrs.value,
      class: slots.value.time(),
    } as HTMLAttributes;
  };

  const getFooterProps = () => {
    return {
      ...dataAttrs.value,
      class: slots.value.footer(),
    } as HTMLAttributes;
  };

  return {
    slots,
    time,
    isFooterVisible,

    getRootProps,
    getBubbleProps,
    getTimeProps,
    getFooterProps,
  };
};

export default useChatBubble;
