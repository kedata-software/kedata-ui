import { useColorPalette } from "../use-color-palette";
import { dataAttrBoolean } from "@kedata-software/toolkit-js";
import { switchSlots, tw } from "@kedata-ui/slots";
import * as zagSwitch from "@zag-js/switch";
import { normalizeProps, useMachine } from "@zag-js/vue";
import {
  computed,
  useId,
  type HTMLAttributes,
  type InputHTMLAttributes,
  type LabelHTMLAttributes,
} from "vue";
import type { SwitchModels, SwitchProps } from "./index.types";

const useSwitch = (props: SwitchProps, models: SwitchModels) => {
  const id = useId();
  const service = useMachine(
    zagSwitch.machine,
    computed(() => {
      return {
        id,
        name: props.name,
        value: props.value,
        checked: models.checked.value,
        onCheckedChange: ({ checked }) => {
          models.checked.value = checked;
        },
      };
    })
  );

  const api = computed(() => zagSwitch.connect(service, normalizeProps));

  const colorPaletteClassName = useColorPalette(() => props.colorPalette);
  const slots = computed(() => {
    return switchSlots({ withParts: props.withParts });
  });

  const dataAttrs = computed(() => ({
    "data-disabled": dataAttrBoolean(props.disabled),
    "data-checked": dataAttrBoolean(models.checked.value),
    "data-invalid": dataAttrBoolean(props.invalid),
    "data-read-only": dataAttrBoolean(props.readOnly),
  }));

  const getRootProps = () => {
    return {
      ...api.value.getRootProps(),
      ...dataAttrs.value,
      class: tw(colorPaletteClassName.value, slots.value.root(), props.class),
    } as LabelHTMLAttributes;
  };

  const getControlProps = () => {
    return {
      ...api.value.getControlProps(),
      ...dataAttrs.value,
      class: tw(slots.value.control()),
    } as HTMLAttributes;
  };

  const getThumbProps = () => {
    return {
      ...api.value.getThumbProps(),
      ...dataAttrs.value,
      class: tw(slots.value.thumb()),
    } as HTMLAttributes;
  };

  const getLabelProps = () => {
    return {
      ...api.value.getLabelProps(),
      ...dataAttrs.value,
      class: tw(slots.value.label()),
    } as HTMLAttributes;
  };

  const getHiddenInputProps = () => {
    return {
      ...api.value.getHiddenInputProps(),
      ...dataAttrs.value,
      type: "checkbox",
      class: tw(slots.value.hiddenInput()),
    } as InputHTMLAttributes;
  };

  return {
    slots,
    models,

    getRootProps,
    getControlProps,
    getThumbProps,
    getLabelProps,
    getHiddenInputProps,
  };
};

export default useSwitch;
