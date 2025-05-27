import { iconButtonSlots, tw } from "@kedata-ui/slots";
import { computed } from "vue";
import type { IconButtonProps } from "./index.types";
import { useColorPalette } from "../use-color-palette";

const useIconButton = (props: IconButtonProps) => {
  const colorPaletteClass = useColorPalette(() => props.colorPalette);
  const slots = computed(() => {
    return iconButtonSlots({
      variant: props.variant,
      size: props.size,
      withParts: props.withParts,
    });
  });

  const getRootProps = () => {
    return {
      class: tw(
        slots.value.root(),
        colorPaletteClass.value,
        props.classes?.root,
        props.class
      ),
      type: props.type ?? "button",
      disabled: props.disabled,
    };
  };

  const getLoadingIconProps = () => {
    return {
      class: tw(slots.value.lodingIcon(), props.classes?.lodingIcon),
    };
  };

  const getIconProps = () => {
    return {
      class: tw(slots.value.icon(), props.classes?.icon),
    };
  };

  return { slots, getRootProps, getLoadingIconProps, getIconProps };
};

export default useIconButton;
