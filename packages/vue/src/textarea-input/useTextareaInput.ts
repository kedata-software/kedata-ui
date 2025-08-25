import { computed, type HTMLAttributes, type TextareaHTMLAttributes } from "vue";
import type { TextareaInputModels, TextareaInputProps } from "./index.types";
import { useColorPalette } from "../use-color-palette";
import { textareaInputSlots, tw } from "@kedata-ui/slots";
import { dataAttrBoolean } from "@kedata-software/toolkit-js";
import clsx from "clsx";

const useTextareaInput = (
  props: TextareaInputProps,
  models: TextareaInputModels
) => {
  const colorPaletteClass = useColorPalette(() => props.colorPalette);
  const maxLength = computed(() => props.maxLength ?? 200);
  const showCounter = computed(() => props.showCounter ?? true);
  const slicedValue = computed(() =>
    models.value.value.slice(0, props.maxLength)
  );

  const slots = computed(() => {
    return textareaInputSlots({ withParts: props.withParts });
  });

  const dataAttrs = computed(() => {
    return {
      "data-invalid": dataAttrBoolean(props.invalid),
      "data-disabled": dataAttrBoolean(props.disabled),
      "data-read-only": dataAttrBoolean(props.readOnly),
      "data-required": dataAttrBoolean(props.required),
    };
  });

  const getRootProps = () => {
    return {
      ...dataAttrs.value,
      id: props.rootId,
      class: tw(clsx(colorPaletteClass.value, slots.value.root(), props.class)),
    } as HTMLAttributes;
  };

  const getTextareaProps = () => {
    return {
      ...dataAttrs.value,
      value: slicedValue.value,
      rows: props.rows,
      id: props.id,
      placeholder: props.placeholder,
      maxLength: props.maxLength,
      disabled: props.disabled,
      readOnly: props.readOnly,
      class: tw(clsx(colorPaletteClass.value, slots.value.input())),
    } as TextareaHTMLAttributes
  };

  const getCounterProps = () => {
    return {
      ...dataAttrs.value,
      class: tw(clsx(colorPaletteClass.value, slots.value.counter())),
    } as HTMLAttributes;
  };

  return {
    slots,
    maxLength,
    slicedValue,
    showCounter,
    getRootProps,
    getTextareaProps,
    getCounterProps,
  };
};

export default useTextareaInput;
