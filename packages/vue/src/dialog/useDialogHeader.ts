import { dialogHeaderSlots, tw } from "@kedata-ui/slots";
import { computed, inject, type HTMLAttributes } from "vue";
import { DialogContextKey } from "./DialogContext";
import type { DialogContextValue, DialogHeaderProps } from "./index.types";

const useDialogHeader = (props: DialogHeaderProps) => {
  const showCloseIcon = computed(() => props.showCloseIcon ?? true);
  const title = computed(() => props.title);
  const context = inject<DialogContextValue>(DialogContextKey)!;

  const slots = computed(() => {
    return dialogHeaderSlots({
      darkable: props.darkable,
      withParts: props.withParts,
    });
  });

  const getRootProps = () => {
    return {
      class: tw(slots.value.root(), props.class),
    } as HTMLAttributes;
  };

  const getTitleProps = () => {
    return {
      class: tw(slots.value.title()),
    } as HTMLAttributes;
  };

  const getCloseIconProps = () => {
    return {
      tabindex: 0,
      class: tw(slots.value.closeIcon()),
      onClick: () => {
        props.onClose?.();
        context.close();
      },
    } as HTMLAttributes;
  };

  return {
    showCloseIcon,
    title,

    getRootProps,
    getTitleProps,
    getCloseIconProps,
  };
};

export default useDialogHeader;
