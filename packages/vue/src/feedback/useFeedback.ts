import { computed, type HTMLAttributes } from 'vue';
import type { FeedbackProps } from './index.types';
import { feedbackSlots, tw } from '@kedata-ui/slots';
import { useColorPalette } from '../use-color-palette';

const useFeedback = (props: FeedbackProps) => {
  const colorPaletteClass = useColorPalette(() => props.colorPalette);

  const slots = computed(() => {
    return feedbackSlots({
      withParts: props.withParts,
    });
  });

  const getRootProps = () => {
    return {
      class: tw(colorPaletteClass.value, slots.value.root(), props.class),
    } as HTMLAttributes;
  };

  const getIconProps = () => {
    return {
      class: tw(slots.value.icon()),
    } as HTMLAttributes;
  };

  const getTitleProps = () => {
    return {
      class: tw(slots.value.title()),
    } as HTMLAttributes;
  };

  const getMessageProps = () => {
    return {
      class: tw(slots.value.message()),
    } as HTMLAttributes;
  };

  return {
    getRootProps,
    getIconProps,
    getTitleProps,
    getMessageProps,
  };
};

export default useFeedback;
