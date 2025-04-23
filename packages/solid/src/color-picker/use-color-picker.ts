import { useBaseProps } from '../base-props';
import { useClassNames } from '../class-names';
import { useTwMerge } from '../tw-merge';
import { colorPickerSlots } from '@kedata-ui/slots/color-picker';
import { omitProps } from '@kedata-software/toolkit-js';
import * as colorPicker from '@zag-js/color-picker';
import { normalizeProps, useMachine } from '@zag-js/solid';
import type { ColorPickerProps } from './index.types';
import type { PropsGetterParams } from '../types';
import { createControlledSignal } from '../create-controlled-signal';
import { createMemo, mergeProps } from 'solid-js';

const {
  root: getRootClassName,

  area: getAreaClassName,
  areaBackground: getAreaBackgroundClassName,
  areaThumb: getAreaThumbClassName,

  channelSliderContainer: getChannelSliderContainerClassName,
  channelSliderGroup: getChannelSliderGroupClassName,
  eyeDropTrigger: getEyeDropTriggerClassName,
  channelSlider: getChannelSliderClassName,
  channelSliderTrack: getChannelSliderTrackClassName,
  channelSliderThumb: getChannelSliderThumbClassName,

  channelInputContainer: getChannelInputContainerClassName,
  channelInput: getChannelInputClassName,

  swatchContainer: getSwatchContainerClassName,
  swatchGroup: getSwatchGroupClassName,
  swatchLabel: getSwatchLabelClassName,
  swatchTrigger: getSwatchTriggerClassName,
  swatch: getSwatchClassName,
} = colorPickerSlots();

const useColorPicker = (inProps: ColorPickerProps) => {
  const props = useBaseProps('ColorPicker', inProps);
  const classNames = useClassNames('ColorPicker', inProps);
  const twMerge = useTwMerge();

  const [value, setValue] = createControlledSignal(
    () => props.value,
    props.onValueChange,
    props.initialValue ?? '#000000FF',
  );

  const valueColor = createMemo(() => colorPicker.parse(value()!));
  const valueHex = createMemo(() => valueColor().toString('hex'));

  const Component = 'div' as const;

  const service = useMachine(colorPicker.machine, {
    get id() {
      return props.id;
    },
    open: true,
    get value() {
      return valueColor();
    },
    getRootNode: () => document,
    onInteractOutside: (e) => {
      e.stopImmediatePropagation();
    },
    onValueChange: (details) => {
      const newValue = details.value.toString('hexa');
      setValue(newValue);
    },
    onValueChangeEnd: (details) => {
      const newValue = details.value.toString('hexa');
      props.onValueChangeEnd?.(newValue);
    },
  });

  const api = createMemo(() => colorPicker.connect(service, normalizeProps));

  const hasSwatches = createMemo(
    () => !!props.swatches && props.swatches?.length > 0,
  );

  const getRootProps = () => {
    return mergeProps(
      () => api().getContentProps(),
      () => omitProps(props, omittedProps),
      {
        'data-state': undefined,
        'data-placement': undefined,
        class: twMerge(getRootClassName(), classNames()?.root, props.class),
      },
    );
  };

  const getAreaProps = () => {
    return mergeProps(
      () => api().getAreaProps(),
      () => ({
        class: twMerge(getAreaClassName(), classNames()?.area),
      }),
    );
  };

  const getAreaBackgroundProps = () => {
    return mergeProps(
      () => api().getAreaBackgroundProps(),
      () => ({
        class: twMerge(
          getAreaBackgroundClassName(),
          classNames()?.areaBackground,
        ),
      }),
    );
  };

  const getAreaThumbProps = () => {
    return mergeProps(
      () => api().getAreaThumbProps(),
      () => ({
        class: twMerge(getAreaThumbClassName(), classNames()?.areaThumb),
      }),
    );
  };

  const getEyeDropperTriggerProps = () => {
    return mergeProps(
      () => api().getEyeDropperTriggerProps(),
      () => ({
        class: twMerge(
          getEyeDropTriggerClassName(),
          classNames()?.eyeDropTrigger,
        ),
      }),
    );
  };

  const getChannelSliderContainerProps = () => {
    return {
      class: twMerge(
        getChannelSliderContainerClassName(),
        classNames()?.channelSliderContainer,
      ),
    };
  };

  const getChannelSliderGroupProps = () => {
    return {
      class: twMerge(
        getChannelSliderGroupClassName(),
        classNames()?.channelSliderGroup,
      ),
    };
  };

  const getChannelSliderProps = (params: colorPicker.ChannelSliderProps) => {
    return mergeProps(
      () => api().getChannelSliderProps(params),
      () => ({
        class: twMerge(
          getChannelSliderClassName(),
          classNames()?.channelSlider,
        ),
      }),
    );
  };

  const getChannelSliderTrackProps = (
    params: colorPicker.ChannelSliderProps,
  ) => {
    return mergeProps(
      () => api().getChannelSliderTrackProps(params),
      () => ({
        class: twMerge(
          getChannelSliderTrackClassName(),
          classNames()?.channelSliderTrack,
        ),
      }),
    );
  };

  const getChannelSliderThumbProps = (
    params: colorPicker.ChannelSliderProps,
  ) => {
    return mergeProps(
      () => api().getChannelSliderThumbProps(params),
      () => ({
        class: twMerge(
          getChannelSliderThumbClassName(),
          classNames()?.channelSliderThumb,
        ),
      }),
    );
  };

  const getChannelInputContainerProps = () => {
    return {
      class: twMerge(
        getChannelInputContainerClassName(),
        classNames()?.channelInputContainer,
      ),
    };
  };

  const getChannelInputProps = (
    params: colorPicker.ChannelInputProps & PropsGetterParams,
  ) => {
    return mergeProps(
      () => api().getChannelInputProps(params),
      () => ({
        class: twMerge(
          getChannelInputClassName(),
          classNames()?.channelInput,
          params.class,
        ),
      }),
    );
  };

  const getSwatchContainerProps = () => {
    return {
      class: twMerge(
        getSwatchContainerClassName(),
        classNames()?.swatchContainer,
      ),
    };
  };

  const getSwatchLabelProps = () => {
    return {
      children: 'Recent colors',
      class: twMerge(getSwatchLabelClassName(), classNames()?.swatchLabel),
    };
  };

  const getSwatchGroupProps = () => {
    return mergeProps(
      () => api().getSwatchGroupProps(),
      () => ({
        class: twMerge(getSwatchGroupClassName(), classNames()?.swatchGroup),
      }),
    );
  };

  const getSwatchTriggerProps = (params: colorPicker.SwatchTriggerProps) => {
    return mergeProps(
      () => api().getSwatchTriggerProps(params),
      () => ({
        class: twMerge(
          getSwatchTriggerClassName(),
          classNames()?.swatchTrigger,
        ),
      }),
    );
  };

  const getSwatchProps = (params: colorPicker.SwatchProps) => {
    return mergeProps(
      () => api().getSwatchProps(params),
      () => ({
        class: twMerge(getSwatchClassName(), classNames()?.swatch),
      }),
    );
  };

  return {
    Component,
    value,
    setValue,
    swatches: createMemo(() => props.swatches),
    hasSwatches,
    valueHex,

    getRootProps,

    getAreaProps,
    getAreaBackgroundProps,
    getAreaThumbProps,

    getChannelSliderGroupProps,
    getChannelSliderContainerProps,
    getEyeDropperTriggerProps,
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

const omittedProps: Array<keyof ColorPickerProps> = [
  'value',
  'onValueChange',
  'onValueChangeEnd',
  'onRequestClose',
  'swatches',
  'classNames',
];
