import { computed, type HTMLAttributes } from "vue";
import type { FeedbackProps } from "./index.types";
import { feedbackSlots, tw } from "@kedata-ui/slots";

const useFeedback = (props: FeedbackProps) => {
  const slots = computed(() => {
    return feedbackSlots({
      withParts: props.withParts,
    });
  });

  const getRootProps = () => {
    return {
      class: tw(slots.value.root(), props.class),
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
