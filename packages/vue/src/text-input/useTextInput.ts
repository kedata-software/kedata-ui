import { dataAttrBoolean } from "@kedata-software/toolkit-js";
import { textInputSlots, tw } from "@kedata-ui/slots";
import { computed, type InputHTMLAttributes } from "vue";
import type { TextInputModels, TextInputProps } from "./index.types";
import { useColorPalette } from "../use-color-palette";

const useTextInput = (props: TextInputProps, models: TextInputModels) => {
  const colorPaletteClass = useColorPalette(() => props.colorPalette);

  const slots = computed(() => {
    return textInputSlots({
      withParts: props.withParts,
    });
  });

  const dataAttrs = computed(() => {
    return {
      "data-invalid": dataAttrBoolean(props.invalid),
      "data-disabled": dataAttrBoolean(props.disabled),
      "data-read-only": dataAttrBoolean(props.readOnly),
      "data-required": dataAttrBoolean(props.required),
      "data-filled": dataAttrBoolean(models.value.value),
    };
  });

  const getRootProps = () => {
    return {
      ...dataAttrs.value,
      id: props.rootId,
      class: tw(colorPaletteClass.value, slots.value.root(), props.class),
    };
  };

  const getInputProps = () => {
    return {
      ...dataAttrs.value,
      id: props.id,
      disabled: props.disabled,
      readonly: props.readOnly,
      placeholder: props.placeholder,
      type: props.type ?? "text",
      name: props.name,
      "aria-describedby": props.invalid
        ? `${props.id}__error-message`
        : undefined,
      class: tw(slots.value.input(), props.classes?.input),
    } as InputHTMLAttributes;
  };

  const getInputWrapperProps = () => {
    return {
      ...dataAttrs.value,
      class: tw(slots.value.inputWrapper(), props.classes?.inputWrapper),
    };
  };

  const getStartAddonProps = () => {
    return {
      ...dataAttrs.value,
      class: tw(slots.value.startAddon()),
    };
  };

  const getEndAddonProps = () => {
    return {
      ...dataAttrs.value,
      class: tw(slots.value.endAddon()),
    };
  };

  const getStartIconProps = () => {
    return {
      ...dataAttrs.value,
      class: tw(slots.value.startIcon()),
    };
  };

  const getEndIconProps = () => {
    return {
      ...dataAttrs.value,
      class: tw(slots.value.endIcon()),
    };
  };

  return {
    slots,

    getRootProps,
    getInputProps,
    getInputWrapperProps,
    getStartAddonProps,
    getEndAddonProps,
    getStartIconProps,
    getEndIconProps,
  };
};

export default useTextInput;
