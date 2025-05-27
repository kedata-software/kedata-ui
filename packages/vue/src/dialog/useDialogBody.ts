import { dialogBodySlots, tw } from "@kedata-ui/slots";
import { computed, type HTMLAttributes } from "vue";
import type { DialogBodyProps } from "./index.types";

const useDialogBody = (props: DialogBodyProps) => {
  const slots = computed(() => {
    return dialogBodySlots({
      darkable: props.darkable,
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

export default useDialogBody;
