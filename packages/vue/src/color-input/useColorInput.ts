import { colorInputSlots } from '@kedata-ui/slots/color-input';
import * as popover from '@zag-js/popover';
import { normalizeProps, useMachine } from '@zag-js/vue';
import type { ColorInputProps } from './index.types';
import type { PropsGetterParams } from '../types';
import type { ColorPickerProps } from '../color-picker';
import type { ColorInputModels } from './index.types';
import { useColorPalette } from '../use-color-palette';
import { computed, useId } from 'vue';
import { tw } from '@kedata-ui/slots';

const useColorInput = (props: ColorInputProps, models: ColorInputModels) => {
  const colorPaletteClassName = useColorPalette(() => props.colorPalette);

  const id = useId();

  const slots = computed(() => {
    return colorInputSlots({
      class: props.class,
      withParts: props.withParts,
    });
  });

  const service = useMachine(
    popover.machine,
    computed(() => ({
      id: id,
      open: models.isOpen.value,
      onOpenChange(details) {
        models.isOpen.value = details.open;
      },
      positioning: {
        placement: 'bottom-start' as const,
      },
      closeOnInteractOutside: true,
      closeOnEscape: true,
      portalled: false,
      onEscapeKeyDown: () => {
        models.isOpen.value = false;
      },
    })),
  );

  const api = computed(() => popover.connect(service, normalizeProps));

  const getRootProps = (params?: PropsGetterParams) => {
    return {
      ...api.value.getTriggerProps(),
      style: {
        '--color-input-value': models.value.value,
      },
      class: tw(
        slots.value.root(),
        colorPaletteClassName.value,
        props.classNames?.root,
        props.class,
        params?.class,
      ),
    };
  };

  const getInputWrapperProps = (params?: PropsGetterParams) => {
    return {
      value: models.value.value,
      class: tw(
        slots.value.inputWrapper(),
        props.classNames?.inputWrapper,
        params?.class,
      ),
    };
  };

  const getValueProps = (params?: PropsGetterParams) => {
    return {
      class: tw(slots.value.value(), props.classNames?.value, params?.class),
    };
  };

  const getHiddenInputProps = (params?: PropsGetterParams) => {
    return {
      value: models.value.value,
      hidden: true,
      class: tw(
        slots.value.hiddenInput(),
        props.classNames?.hiddenInput,
        params?.class,
      ),
    };
  };

  const getIndicatorProps = (params?: PropsGetterParams) => {
    return {
      class: tw(
        slots.value.indicator(),
        props.classNames?.indicator,
        params?.class,
      ),
    };
  };

  const getColorPickerProps = (params?: ColorPickerProps) => {
    return {
      ...params,
      class: tw(
        slots.value.ColorInput(),
        props.classNames?.ColorInput,
        params?.class,
      ),
      modelValue: models.value.value,
      'onUpdate:modelValue': (value: string) => {
        models.value.value = value;
      },
    } as ColorPickerProps;
  };

  const getPositionerProps = (params?: PropsGetterParams) => {
    return {
      ...api.value.getPositionerProps(),
      class: tw(
        slots.value.positioner(),
        props.classNames?.positioner,
        params?.class,
      ),
    } as PropsGetterParams;
  };

  const getContentProps = () => {
    return {
      ...api.value.getContentProps(),
      hidden: undefined,
    };
  };

  return {
    isOpen: computed(() => models.isOpen.value),

    getRootProps,
    getContentProps,
    getInputWrapperProps,
    getValueProps,
    getHiddenInputProps,
    getIndicatorProps,
    getColorPickerProps,
    getPositionerProps,
  };
};

export default useColorInput;
