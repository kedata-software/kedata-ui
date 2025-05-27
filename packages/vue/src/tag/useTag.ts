import { useColorPalette } from "../use-color-palette";
import { dataAttrBoolean } from "@kedata-software/toolkit-js";
import { tagSlots, tw } from "@kedata-ui/slots";
import { computed, type HTMLAttributes } from "vue";
import type { TagProps } from "./index.types";

const useTag = (props: TagProps) => {
  const colorPaletteClassName = useColorPalette(() => props.colorPalette);
  const slots = computed(() => {
    return tagSlots({ variant: props.variant, withParts: props.withParts });
  });

  const dataAttrs = computed(() => ({
    "data-variant": props.variant,
    "data-closeable": dataAttrBoolean(props.closeable),
  }));

  const closeable = computed(() => props.closeable);
  const variant = computed(() => props.variant);

  const getRootProps = () => {
    return {
      ...dataAttrs.value,
      class: tw(colorPaletteClassName.value, slots.value.root(), props.class),
    } as HTMLAttributes;
  };

  const getCloseIconProps = () => {
    return {
      ...dataAttrs.value,
      class: tw(slots.value.closeIcon()),
    } as HTMLAttributes;
  };

  return {
    slots,
    variant,
    closeable,

    getRootProps,
    getCloseIconProps,
  };
};

export default useTag;
