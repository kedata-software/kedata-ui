import { errorMessageSlots, tw } from "@kedata-ui/slots";
import { computed, type HTMLAttributes } from "vue";
import type { ErrorMessageProps } from "./index.types";

const useErrorMessage = (props: ErrorMessageProps) => {
  const slots = computed(() => {
    return errorMessageSlots({
      withParts: props.withParts,
    });
  });

  const getRootProps = () => {
    return {
      class: tw("color-palette-danger", slots.value.root(), props.class),
    } as HTMLAttributes;
  };

  return {
    getRootProps,
  };
};

export default useErrorMessage;
