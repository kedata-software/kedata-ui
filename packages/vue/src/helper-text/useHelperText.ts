import { helperTextSlots, tw } from "@kedata-ui/slots";
import { computed, type HTMLAttributes } from "vue";
import type { HelperTextProps } from "./index.types";

const useHelperText = (props: HelperTextProps) => {
  const slots = computed(() => {
    return helperTextSlots({
      withParts: props.withParts,
    });
  });

  const getRootProps = () => {
    return {
      class: tw(slots.value.root(), props.class),
    } as HTMLAttributes;
  };

  return {
    getRootProps,
  };
};

export default useHelperText;
