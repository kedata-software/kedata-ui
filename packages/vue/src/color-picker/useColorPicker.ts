import { colorPickerSlots, tw } from "@kedata-ui/slots";
import * as colorPicker from "@zag-js/color-picker";
import { normalizeProps, useMachine } from "@zag-js/vue";
import { computed, useId, type HTMLAttributes } from "vue";
import type { ColorPickerModels, ColorPickerProps } from "./index.types";

const useColorPicker = (props: ColorPickerProps, models: ColorPickerModels) => {
  const id = useId();
  const valueColor = computed(() => colorPicker.parse(models.value.value));
  const valueHex = computed(() => valueColor.value.toString("hex"));

  const service = useMachine(
    colorPicker.machine,
    computed(() => {
      return {
        id,
        open: true,
        onInteractOutside: (e) => {
          e.stopImmediatePropagation();
        },
        value: valueColor.value,
        onValueChange: (details) => {
          models.value.value = details.value.toString("hexa");
        },
      };
    })
  );

  const api = computed(() => colorPicker.connect(service, normalizeProps));

  const swatches = computed(() => props.swatches || []);
  const hasSwatches = computed(
    () => !!props.swatches && props.swatches?.length > 0
  );

  const slots = computed(() => {
    return colorPickerSlots({
      withParts: props.withParts,
    });
  });

  const getRootProps = () => {
    return {
      ...api.value.getRootProps(),
      "data-state": undefined,
      "data-placement": undefined,
      class: tw(slots.value.root(), props.class),
    } as HTMLAttributes;
  };

  const getAreaProps = () => {
    return {
      ...api.value.getAreaProps(),
      class: tw(slots.value.area()),
    };
  };

  const getAreaBackgroundProps = () => {
    return {
      ...api.value.getAreaBackgroundProps(),
      class: tw(slots.value.areaBackground()),
    };
  };

  const getAreaThumbProps = () => {
    return {
      ...api.value.getAreaThumbProps(),
      class: tw(slots.value.areaThumb()),
    };
  };

  const getEyeDropperTriggerProps = () => {
    return {
      ...api.value.getEyeDropperTriggerProps(),
      class: tw(slots.value.eyeDropTrigger()),
    };
  };

  const getChannelSliderContainerProps = () => {
    return {
      class: tw(slots.value.channelSliderContainer()),
    };
  };

  const getChannelSliderGroupProps = () => {
    return {
      class: tw(slots.value.channelSliderGroup()),
    };
  };

  const getChannelSliderProps = (params: colorPicker.ChannelSliderProps) => {
    return {
      ...api.value.getChannelSliderProps(params),
      class: tw(slots.value.channelSlider()),
    };
  };

  const getChannelSliderTrackProps = (
    params: colorPicker.ChannelSliderProps
  ) => {
    return {
      ...api.value.getChannelSliderTrackProps(params),
      class: tw(slots.value.channelSliderTrack()),
    };
  };

  const getChannelSliderThumbProps = (
    params: colorPicker.ChannelSliderProps
  ) => {
    return {
      ...api.value.getChannelSliderThumbProps(params),
      class: tw(slots.value.channelSliderThumb()),
    };
  };

  const getChannelInputContainerProps = () => {
    return {
      class: tw(slots.value.channelInputContainer()),
    };
  };

  const getChannelInputProps = (
    params: colorPicker.ChannelInputProps & { class?: string }
  ) => {
    return {
      ...api.value.getChannelInputProps(params),
      class: tw(slots.value.channelInput(), params.class),
    };
  };

  const getSwatchContainerProps = () => {
    return {
      class: tw(slots.value.swatchContainer()),
    };
  };

  const getSwatchLabelProps = () => {
    return {
      children: "Recent colors",
      class: tw(slots.value.swatchLabel()),
    };
  };

  const getSwatchGroupProps = () => {
    return {
      ...api.value.getSwatchGroupProps(),
      class: tw(slots.value.swatchGroup()),
    };
  };

  const getSwatchTriggerProps = (params: colorPicker.SwatchTriggerProps) => {
    return {
      ...api.value.getSwatchTriggerProps(params),
      class: tw(slots.value.swatchTrigger()),
    };
  };

  const getSwatchProps = (params: colorPicker.SwatchProps) => {
    return {
      ...api.value.getSwatchProps(params),
      class: tw(slots.value.swatch()),
    };
  };

  return {
    slots,
    valueHex,
    swatches,
    hasSwatches,

    getRootProps,
    getAreaProps,
    getAreaBackgroundProps,
    getAreaThumbProps,
    getEyeDropperTriggerProps,
    getChannelSliderContainerProps,
    getChannelSliderGroupProps,
    getChannelSliderProps,
    getChannelSliderTrackProps,
    getChannelSliderThumbProps,
    getChannelInputContainerProps,
    getChannelInputProps,
    getSwatchContainerProps,
    getSwatchLabelProps,
    getSwatchGroupProps,
    getSwatchTriggerProps,
    getSwatchProps,
  };
};

export default useColorPicker;
