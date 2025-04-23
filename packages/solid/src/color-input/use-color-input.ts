import { useBaseProps } from '../base-props';
import { useClassNames } from '../class-names';
import { useTwMerge } from '../tw-merge';
import createAnimateState, {
  animateStatePreset,
} from '../create-animate-state';
import { createControlledSignal } from '../create-controlled-signal';
import { createDialogHolder } from '../create-dialog-holder';
import { colorInputSlots } from '@kedata-ui/slots/color-input';
import * as popover from '@zag-js/popover';
import { normalizeProps, useMachine } from '@zag-js/solid';
import { createMemo, mergeProps } from 'solid-js';
import type { ColorInputProps } from './index.types';
import type { PropsGetterParams } from '../types';
import type { ColorPickerProps } from '../color-picker';

const {
  root: getRootClassName,
  inputWrapper: getInputWrapperClassName,
  value: getValueClassName,
  hiddenInput: getHiddenInputClassName,
  indicator: getIndicatorClassName,
  positioner: getPositionerClassName,

  ColorInput: getColorInputClassName,
} = colorInputSlots();

const useColorInput = (inProps: ColorInputProps) => {
  const props = useBaseProps('ColorInput', inProps);
  const classNames = useClassNames('ColorInput', inProps);
  const twMerge = useTwMerge();

  const [isOpen, setIsOpen] = createControlledSignal(
    () => props.isOpen,
    props.onIsOpenChange,
    props.initialIsOpen ?? false,
  );

  const [value, setValue] = createControlledSignal(
    () => props.value,
    props.onValueChange,
    props.initialValue ?? '#000000FF',
  );

  const service = useMachine(popover.machine, {
    get id() {
      return props.id;
    },
    get open() {
      return isOpen();
    },
    onOpenChange(details) {
      setIsOpen(details.open);
    },
    positioning: {
      placement: 'bottom-start',
    },
    closeOnInteractOutside: true,
    closeOnEscape: true,
    portalled: false,
    onEscapeKeyDown: () => {
      setIsOpen(false);
    },
  });

  const api = createMemo(() => popover.connect(service, normalizeProps));

  const { isPresence, animateState } = createAnimateState(() => isOpen());

  createDialogHolder(() => isOpen());

  const getRootProps = (params?: PropsGetterParams) => {
    return mergeProps(
      () => api().getTriggerProps(),
      () => ({
        style: {
          get '--color-input-value'() {
            return value();
          },
          ...params?.style,
        },
        type: 'button' as const,
      }),
      () => ({
        class: twMerge(
          getRootClassName(),
          classNames()?.root,
          props.class,
          params?.class,
        ),
      }),
    );
  };

  const getInputWrapperProps = (params?: PropsGetterParams) => {
    return {
      get value() {
        return value();
      },
      class: twMerge(
        getInputWrapperClassName(),
        classNames()?.inputWrapper,
        params?.class,
      ),
    };
  };

  const getValueProps = (params?: PropsGetterParams) => {
    return {
      class: twMerge(getValueClassName(), classNames()?.value, params?.class),
      get children() {
        return value();
      },
    };
  };

  const getHiddenInputProps = (params?: PropsGetterParams) => {
    return {
      get value() {
        return value();
      },
      hidden: true,
      class: twMerge(
        getHiddenInputClassName(),
        classNames()?.hiddenInput,
        params?.class,
      ),
    };
  };

  const getIndicatorProps = (params?: PropsGetterParams) => {
    return {
      class: twMerge(
        getIndicatorClassName(),
        classNames()?.indicator,
        params?.class,
      ),
    };
  };

  const getColorPickerProps = (params?: ColorPickerProps) => {
    return {
      ...params,
      class: twMerge(getColorInputClassName(), params?.class),
      get value() {
        return value();
      },
      onValueChange: setValue,
    } as ColorPickerProps;
  };

  const getPositionerProps = (params?: PropsGetterParams) => {
    return mergeProps(
      () => api().getPositionerProps(),
      () => ({
        class: twMerge(
          animateStatePreset.fadeUp.base,
          animateStatePreset.fadeUp[animateState()],
          getPositionerClassName(),
          classNames()?.positioner,
          params?.class,
        ),
      }),
    );
  };

  const getContentProps = () => {
    return {
      ...api().getContentProps(),
      hidden: undefined,
    };
  };

  return {
    isOpen,
    isPresence,

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
