import { useColorPalette } from '../use-color-palette';
import { dataAttrBoolean } from '@kedata-software/toolkit-js';
import { pinInputSlots } from '@kedata-ui/slots/pin-input';
import * as pinInput from '@zag-js/pin-input';
import { normalizeProps, useMachine } from '@zag-js/vue';
import type { PinInputModels, PinInputProps } from './index.types';
import type { PropsGetterParams } from '../types';
import { tw } from '@kedata-ui/slots';
import { computed, useId } from 'vue';

const usePinInput = (props: PinInputProps, models: PinInputModels) => {
  const colorPaletteClass = useColorPalette(() => props.colorPalette);
  const id = useId();

  const count = computed(() => props.count ?? 6);
  const mask = computed(() => props.mask ?? false);

  const service = useMachine(
    pinInput.machine,
    computed(() => ({
      id: id,
      value: models.value.value,
      blurOnComplete: props.blurOnComplete ?? true,
      onValueChange(details) {
        models.value.value = details.value;
      },
      disabled: props.disabled,
      invalid: props.invalid,
      count: count.value,
      mask: mask.value,
      readOnly: props.readOnly,
    })),
  );

  const api = computed(() => pinInput.connect(service, normalizeProps));

  const dataAttrs = computed(() => {
    return {
      'data-invalid': dataAttrBoolean(props.invalid),
      'data-disabled': dataAttrBoolean(props.disabled),
      'data-read-only': dataAttrBoolean(props.readOnly),
    };
  });

  const slots = computed(() => pinInputSlots());

  const getRootProps = (params: PropsGetterParams = {}) => {
    // return mergeProps(
    //   () => api().getRootProps(),
    //   () => dataAttrs(),
    //   () => ({
    //     class: tw(slots().root(), props.class, params.class),
    //   }),
    // );
    return {
      ...api.value.getRootProps(),
      ...dataAttrs.value,
      class: tw(
        colorPaletteClass.value,
        slots.value.root(),
        props.class,
        params.class,
      ),
    };
  };

  const getPinInputProps = (
    params: PropsGetterParams & pinInput.InputProps,
  ) => {
    // return mergeProps(
    //   () => api().getInputProps(params),
    //   () => dataAttrs(),
    //   () => ({
    //     class: tw(slots().input(), params?.class),
    //     inputmode: props.inputmode ?? 'numeric',
    //   }),
    // );
    return {
      ...api.value.getInputProps(params),
      ...dataAttrs.value,
      class: tw(slots.value.input(), params?.class),
      inputmode: props.inputmode ?? 'numeric',
    };
  };

  return {
    count,

    getRootProps,
    getPinInputProps,
  };
};

export default usePinInput;
