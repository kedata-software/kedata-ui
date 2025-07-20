import { dialogFooterSlots, tw } from "@kedata-ui/slots";
import { computed, type HTMLAttributes } from "vue";
import type { DialogFooterProps } from "./index.types";

const useDialogFooter = (props: DialogFooterProps) => {
  const slots = computed(() => {
    return dialogFooterSlots({
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

export default useDialogFooter;
