import { popoverSlots, tw } from "@kedata-ui/slots";
import * as popover from "@zag-js/popover";
import { normalizeProps, useMachine } from "@zag-js/vue";
import type { PopoverModels, PopoverProps } from "./index.types";
import {
  computed,
  effect,
  useId,
  type ButtonHTMLAttributes,
  type HTMLAttributes,
} from "vue";

const usePopover = (props: PopoverProps, models: PopoverModels) => {
  const id = useId();

  const service = useMachine(
    popover.machine,
    computed(() => {
      return {
        id,
        open: models.open.value,
        onOpenChange: (details) => {
          models.open.value = details.open;
        },
      };
    })
  );

  const api = computed(() => popover.connect(service, normalizeProps));

  const slots = computed(() => {
    return popoverSlots({
      withParts: props.withParts,
    });
  });

  const getTriggerProps = () => {
    return {
      ...api.value.getTriggerProps(),
      class: tw(slots.value.trigger()),
    } as ButtonHTMLAttributes;
  };

  const getPositionerProps = () => {
    return {
      ...api.value.getPositionerProps(),
      class: tw(slots.value.positioner()),
    } as HTMLAttributes;
  };

  const getContentProps = () => {
    return {
      ...api.value.getContentProps(),
      class: tw(slots.value.content()),
    } as HTMLAttributes;
  };

  return {
    slots,

    getTriggerProps,
    getPositionerProps,
    getContentProps,
  };
};

export default usePopover;
