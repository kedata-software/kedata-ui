import { useColorPalette } from "../use-color-palette";
import { buttonSlots, tw } from "@kedata-ui/slots";
import { computed } from "vue";
import type { ButtonProps } from "./index.types";
import { dataAttrBoolean } from "@kedata-software/toolkit-js";

const useButton = (props: ButtonProps) => {
  const colorPalette = useColorPalette(() => props.colorPalette);

  const buttonType = computed(() => props.type ?? "button");

  const slots = computed(() => {
    return buttonSlots({
      withParts: props.withParts,
      variant: props.variant,
      size: props.size,
    });
  });

  const dataAttrs = computed(() => ({
    "data-disabled": dataAttrBoolean(props.disabled),
    "data-loading": dataAttrBoolean(props.loading),
    "data-size": props.size,
  }));

  const getRootProps = () => {
    return {
      ...dataAttrs.value,
      type: buttonType.value,
      disabled: props.disabled || props.loading,
      class: tw(colorPalette.value, slots.value.root(), props.class),
    };
  };

  const getStartIconProps = () => {
    return {
      class: slots.value.startIcon(),
    };
  };

  const getEndIconProps = () => {
    return {
      class: slots.value.endIcon(),
    };
  };

  return {
    colorPalette,

    getRootProps,
    getStartIconProps,
    getEndIconProps,
  };
};

export default useButton;
