import { useBaseProps } from '../base-props';
import { useClassNames } from '../class-names';
import { useTwMerge } from '../tw-merge';
import { colorPickerSlots } from '@kedata-ui/slots/color-picker';
import { omitProps } from '@kedata-software/toolkit-js';
import * as colorPicker from '@zag-js/color-picker';
import { normalizeProps, useMachine } from '@zag-js/react';
import type { ColorPickerProps } from './index.types';
import type { PropsGetterParams } from '../types';
import { useControlledSignal } from '../use-controlled-signal';
import { useMemo } from 'react';

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

  const [value, setValue] = useControlledSignal(
    props.value,
    props.onValueChange,
    props.initialValue ?? '#000000FF',
  );

  const valueColor = useMemo(() => colorPicker.parse(value!), [value]);
  const valueHex = useMemo(() => valueColor.toString('hex'), [valueColor]);

  const Component = 'div' as const;

  const service = useMachine(colorPicker.machine, {
    id: props.id,
    open: true,
    value: valueColor,
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

  const api = colorPicker.connect(service, normalizeProps);

  const hasSwatches = useMemo(
    () => !!props.swatches && props.swatches?.length > 0,
    [props.swatches],
  );

  const getRootProps = () => {
    return {
      ...api.getContentProps(),
      ...omitProps(props, omittedProps),
      'data-state': undefined,
      'data-placement': undefined,
      class: twMerge(getRootClassName(), classNames?.root, props.className),
    };
  };

  const getAreaProps = () => {
    return {
      ...api.getAreaProps(),
      class: twMerge(getAreaClassName(), classNames?.area),
    };
  };

  const getAreaBackgroundProps = () => {
    return {
      ...api.getAreaBackgroundProps(),
      class: twMerge(getAreaBackgroundClassName(), classNames?.areaBackground),
    };
  };

  const getAreaThumbProps = () => {
    return {
      ...api.getAreaThumbProps(),
      class: twMerge(getAreaThumbClassName(), classNames?.areaThumb),
    };
  };

  const getEyeDropperTriggerProps = () => {
    return {
      ...api.getEyeDropperTriggerProps(),
      class: twMerge(getEyeDropTriggerClassName(), classNames?.eyeDropTrigger),
    };
  };

  const getChannelSliderContainerProps = () => {
    return {
      class: twMerge(
        getChannelSliderContainerClassName(),
        classNames?.channelSliderContainer,
      ),
    };
  };

  const getChannelSliderGroupProps = () => {
    return {
      class: twMerge(
        getChannelSliderGroupClassName(),
        classNames?.channelSliderGroup,
      ),
    };
  };

  const getChannelSliderProps = (params: colorPicker.ChannelSliderProps) => {
    return {
      ...api.getChannelSliderProps(params),
      class: twMerge(getChannelSliderClassName(), classNames?.channelSlider),
    };
  };

  const getChannelSliderTrackProps = (
    params: colorPicker.ChannelSliderProps,
  ) => {
    return {
      ...api.getChannelSliderTrackProps(params),
      class: twMerge(
        getChannelSliderTrackClassName(),
        classNames?.channelSliderTrack,
      ),
    };
  };

  const getChannelSliderThumbProps = (
    params: colorPicker.ChannelSliderProps,
  ) => {
    return {
      ...api.getChannelSliderThumbProps(params),
      class: twMerge(
        getChannelSliderThumbClassName(),
        classNames?.channelSliderThumb,
      ),
    };
  };

  const getChannelInputContainerProps = () => {
    return {
      class: twMerge(
        getChannelInputContainerClassName(),
        classNames?.channelInputContainer,
      ),
    };
  };

  const getChannelInputProps = (
    params: colorPicker.ChannelInputProps & PropsGetterParams,
  ) => {
    return {
      ...api.getChannelInputProps(params),
      class: twMerge(
        getChannelInputClassName(),
        classNames?.channelInput,
        params.className,
      ),
    };
  };

  const getSwatchContainerProps = () => {
    return {
      class: twMerge(
        getSwatchContainerClassName(),
        classNames?.swatchContainer,
      ),
    };
  };

  const getSwatchLabelProps = () => {
    return {
      children: 'Recent colors',
      class: twMerge(getSwatchLabelClassName(), classNames?.swatchLabel),
    };
  };

  const getSwatchGroupProps = () => {
    return {
      ...api.getSwatchGroupProps(),
      class: twMerge(getSwatchGroupClassName(), classNames?.swatchGroup),
    };
  };

  const getSwatchTriggerProps = (params: colorPicker.SwatchTriggerProps) => {
    return {
      ...api.getSwatchTriggerProps(params),
      class: twMerge(getSwatchTriggerClassName(), classNames?.swatchTrigger),
    };
  };

  const getSwatchProps = (params: colorPicker.SwatchProps) => {
    return {
      ...api.getSwatchProps(params),
      class: twMerge(getSwatchClassName(), classNames?.swatch),
    };
  };

  return {
    Component,
    value,
    setValue,
    swatches: props.swatches,
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
