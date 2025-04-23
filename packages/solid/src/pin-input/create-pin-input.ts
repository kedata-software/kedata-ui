import { useBaseProps } from '../base-props';
import { useClassNames } from '../class-names';
import { createControlledSignal } from '../create-controlled-signal';
import { useTwMerge } from '../tw-merge';
import useColorPalette from '../use-color-palette';
import { dataAttrBoolean } from '@kedata-software/toolkit-js';
import { pinInputSlots } from '@kedata-ui/slots/pin-input';
import * as pinInput from '@zag-js/pin-input';
import { normalizeProps, useMachine } from '@zag-js/solid';
import { createMemo, mergeProps } from 'solid-js';
import type { PinInputProps } from './index.types';
import type { PropsGetterParams } from '../types';

const createPinInput = (inProps: PinInputProps) => {
  const props = useBaseProps('PinInput', inProps);
  const classes = useClassNames('PinInput', props);
  const colorPaletteClass = useColorPalette(() => props.colorPalette);
  const twMerge = useTwMerge();
  const [value, setValue] = createControlledSignal(
    () => props.value,
    props.onValueChange,
    props.initialValue ?? [],
  );

  const count = () => props.count ?? 6;
  const mask = () => props.mask ?? false;

  const service = useMachine(pinInput.machine, {
    get id() {
      return props.id;
    },
    get value() {
      return value();
    },
    get blurOnComplete() {
      return props.blurOnComplete ?? true;
    },
    onValueChange(details) {
      setValue(details.value);
    },
    get disabled() {
      return props.disabled;
    },
    get invalid() {
      return props.invalid;
    },
    get count() {
      return count();
    },
    get mask() {
      return mask();
    },
    get readOnly() {
      return props.readOnly;
    },
  });

  const api = createMemo(() => pinInput.connect(service, normalizeProps));

  const dataAttrs = createMemo(() => {
    return {
      get 'data-invalid'() {
        return dataAttrBoolean(props.invalid);
      },
      get 'data-disabled'() {
        return dataAttrBoolean(props.disabled);
      },
      get 'data-read-only'() {
        return dataAttrBoolean(props.readOnly);
      },
    };
  });

  const slots = createMemo(() => pinInputSlots());

  const getRootProps = (params: PropsGetterParams = {}) => {
    return mergeProps(
      () => api().getRootProps(),
      () => dataAttrs(),
      () => ({
        class: twMerge(
          colorPaletteClass(),
          slots().root(),
          classes()?.root,
          props.class,
          params.class,
        ),
      }),
    );
  };

  const getPinInputProps = (
    params: PropsGetterParams & pinInput.InputProps,
  ) => {
    return mergeProps(
      () => api().getInputProps(params),
      () => dataAttrs(),
      () => ({
        class: twMerge(slots().input(), classes()?.input, params?.class),
        inputmode: props.inputmode ?? 'numeric',
      }),
    );
  };

  return {
    value,
    setValue,
    count,

    getRootProps,
    getPinInputProps,
  };
};

export default createPinInput;
