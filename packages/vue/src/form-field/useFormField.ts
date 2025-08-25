import { computed, inject, type HTMLAttributes } from "vue";
import type { FormFieldProps } from "./index.types";
import { formFieldSlots, tw } from "@kedata-ui/slots";
import { FormContextKey } from "../form";
import { dataAttrBoolean } from "@kedata-software/toolkit-js";

const useFormField = (props: FormFieldProps) => {
  const formContext = inject(FormContextKey) as {
    labelPlacement: FormFieldProps["labelPlacement"];
    labelClass?: string;
  };

  const labelPlacement = computed(
    () => props.labelPlacement ?? formContext?.labelPlacement ?? "top"
  );

  const slots = computed(() => {
    return formFieldSlots({
      labelPlacement: labelPlacement.value,
      withParts: props.withParts,
    });
  });

  const dataAttrs = computed(() => ({
    "data-label-placement": labelPlacement.value,
    "data-invalid": dataAttrBoolean(props.invalid),
  }));

  const getRootProps = () => {
    return {
      ...dataAttrs.value,
      class: tw(slots.value.root()),
    } as HTMLAttributes;
  };

  const getLabelProps = () => {
    return {
      class: tw(slots.value.label(), formContext?.labelClass),
    } as HTMLAttributes;
  };

  const getBodyProps = () => {
    return {
      class: tw(slots.value.body()),
    } as HTMLAttributes;
  };

  const getFooterProps = () => {
    return {
      class: tw(slots.value.footer()),
    } as HTMLAttributes;
  };

  return {
    getRootProps,
    getLabelProps,
    getBodyProps,
    getFooterProps,
  };
};

export default useFormField;
