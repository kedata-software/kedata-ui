import { computed, type HTMLAttributes, type InputHTMLAttributes } from "vue";
import type { RadioModels, RadioProps } from "./index.types";
import { radioSlots, tw } from "@kedata-ui/slots";
import { dataAttrBoolean } from "@kedata-software/toolkit-js";
import { useColorPalette } from "../use-color-palette";

const useRadio = (props: RadioProps, models: RadioModels) => {
  const colorPaletteClass = useColorPalette(() => props.colorPalette);

  const slots = computed(() => {
    return radioSlots({
      darkable: props.darkable,
      withParts: props.withParts,
    });
  });

  const checked = computed(() => {
    const checkedModel = models.checked.value;
    if (typeof checkedModel === "string") {
      return props.value === checkedModel;
    }

    return checkedModel;
  });

  const dataAttrs = computed(() => ({
    "data-disabled": dataAttrBoolean(props.disabled),
    "data-checked": dataAttrBoolean(checked.value),
    "data-invalid": dataAttrBoolean(props.invalid),
    "data-read-only": dataAttrBoolean(props.readOnly),
  }));

  const getRootProps = () => {
    return {
      ...dataAttrs.value,
      class: tw(colorPaletteClass.value, slots.value.root(), props.class),
    } as HTMLAttributes;
  };

  const getControlProps = () => {
    return {
      ...dataAttrs.value,
      class: tw(slots.value.control(), "flex-shrink-0"),
    } as HTMLAttributes;
  };

  const getContentProps = () => {
    return {
      ...dataAttrs.value,
      class: slots.value.content(),
    } as HTMLAttributes;
  };

  const getLabelProps = () => {
    return {
      ...dataAttrs.value,
      class: tw(slots.value.label()),
    } as HTMLAttributes;
  };

  const getDescriptionProps = () => {
    return {
      ...dataAttrs.value,
      class: tw(slots.value.description()),
    } as HTMLAttributes;
  };

  const getIndicatorProps = () => {
    return {
      ...dataAttrs.value,
      class: tw(slots.value.indicator()),
    } as HTMLAttributes;
  };

  const getHiddenInputProps = () => {
    return {
      ...dataAttrs.value,
      class: tw(slots.value.hiddenInput()),
      checked: checked.value,
      disabled: props.disabled,
      readonly: props.readOnly,
      value: props.value,
      name: props.name,
      type: "radio" as const,
    } as InputHTMLAttributes;
  };

  return {
    slots,

    getRootProps,
    getControlProps,
    getContentProps,
    getLabelProps,
    getDescriptionProps,
    getIndicatorProps,
    getHiddenInputProps,
  };
};

export default useRadio;
