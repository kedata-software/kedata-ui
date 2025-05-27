import { useColorPalette } from "../use-color-palette";
import { checkboxSlots } from "@kedata-ui/slots";
import * as checkbox from "@zag-js/checkbox";
import { normalizeProps, useMachine } from "@zag-js/vue";
import {
  computed,
  useId,
  type HTMLAttributes,
  type InputHTMLAttributes,
  type LabelHTMLAttributes,
} from "vue";
import type { CheckboxModels, CheckboxProps } from "./index.types";
import { dataAttrBoolean } from "@kedata-software/toolkit-js";

const useCheckbox = (props: CheckboxProps, models: CheckboxModels) => {
  const colorPaletteClassName = useColorPalette(() => props.colorPalette);
  const slots = computed(() => {
    return checkboxSlots({
      class: props.class,
      withParts: props.withParts,
    });
  });

  const id = useId();

  const checked = computed(() => {
    const checkedModel = models.checked.value;
    if (Array.isArray(checkedModel)) {
      return props.value ? checkedModel.includes(props.value) : false;
    }

    return checkedModel;
  });

  const service = useMachine<checkbox.Schema>(
    checkbox.machine,
    computed(() => ({
      id,
      checked: checked.value,
      value: props.value,
      name: props.name,
      onCheckedChange: ({ checked }) => {
        if (typeof checked === "boolean") {
          const checkedModel = models.checked.value;
          if (Array.isArray(checkedModel)) {
            if (checked) {
              models.checked.value = [
                ...checkedModel,
                props.value ?? "",
              ].filter(Boolean);
            } else {
              models.checked.value = checkedModel.filter(
                (item) => item !== props.value
              );
            }

            return;
          }

          models.checked.value = checked;
        }
      },
    }))
  );

  const api = computed(() => checkbox.connect(service, normalizeProps));

  const indeterminate = computed(() => props.indeterminate);

  const dataAttrs = computed(() => {
    return {
      "data-checked": dataAttrBoolean(checked.value),
      "data-invalid": dataAttrBoolean(props.invalid),
      "data-disabled": dataAttrBoolean(props.disabled),
      "data-read-only": dataAttrBoolean(props.readOnly),
      "data-indeterminate": dataAttrBoolean(props.indeterminate),
    };
  });

  const getRootProps = () => {
    return {
      ...api.value.getRootProps(),
      ...dataAttrs.value,
      class: [colorPaletteClassName.value, slots.value.root(), props.class],
    } as LabelHTMLAttributes;
  };

  const getControlProps = () => {
    return {
      ...api.value.getControlProps(),
      ...dataAttrs.value,
      class: slots.value.control(),
    } as HTMLAttributes;
  };

  const getIndicatorProps = () => {
    return {
      ...api.value.getIndicatorProps(),
      ...dataAttrs.value,
      class: slots.value.indicator(),
    } as HTMLAttributes;
  };

  const getLabelProps = () => {
    return {
      ...api.value.getLabelProps(),
      ...dataAttrs.value,
      class: slots.value.label(),
    } as HTMLAttributes;
  };

  const getHiddenInputProps = () => {
    return {
      ...api.value.getHiddenInputProps(),
      ...dataAttrs.value,
      class: slots.value.hiddenInput(),
    } as InputHTMLAttributes;
  };

  return {
    slots,
    models,
    indeterminate,

    getRootProps,
    getControlProps,
    getIndicatorProps,
    getLabelProps,
    getHiddenInputProps,
  };
};

export default useCheckbox;
