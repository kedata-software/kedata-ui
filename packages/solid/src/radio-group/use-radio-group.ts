import { useBaseProps } from '../base-props';
import { useClassNames } from '../class-names';
import { useTwMerge } from '../tw-merge';
import { createControlledSignal } from '../create-controlled-signal';
import { radioGroupSlots } from '@kedata-ui/slots/radio-group';
import * as radio from '@zag-js/radio-group';
import { normalizeProps, useMachine } from '@zag-js/solid';
import clsx from 'clsx';
import {
  createMemo,
  mergeProps,
  splitProps,
  type ComponentProps,
  type ValidComponent,
} from 'solid-js';
import type { RadioGroupProps } from './index.types';

const useRadioGroup = (inProps: RadioGroupProps) => {
  const props = useBaseProps('RadioGroup', inProps);
  const classNames = useClassNames('RadioGroup', inProps);
  const twMerge = useTwMerge();
  const orientation = createMemo(() => props.orientation ?? 'vertical');

  const [value, setValue] = createControlledSignal(
    () => props.value,
    props.onValueChange,
    props.initialValue ?? '',
  );

  const service = useMachine(radio.machine, {
    get id() {
      return props.id;
    },
    get value() {
      return value();
    },
    get name() {
      return props.name;
    },
    onValueChange(details) {
      if (details.value !== null) {
        setValue(details.value);
      }
    },
    get readOnly() {
      return props.readOnly;
    },
    get disabled() {
      return props.disabled;
    },
    get orientation() {
      return orientation();
    },
  });

  const radioGroupApi = createMemo(() => {
    return radio.connect(service, normalizeProps);
  });

  const slots = createMemo(() => {
    return radioGroupSlots({
      orientation: orientation(),
      withParts: props.withParts,
    });
  });

  const [, rootProps] = splitProps(props, omittedProps);

  const getRootProps = <T extends ValidComponent = 'div'>(params?: {
    className?: string;
  }) => {
    return mergeProps(
      () => radioGroupApi().getRootProps(),
      () => rootProps,
      () => ({
        class: twMerge(
          clsx(
            slots().root(),
            classNames()?.root,
            props.class,
            params?.className,
          ),
        ),
      }),
    ) as ComponentProps<T>;
  };

  return {
    get value() {
      return value();
    },
    api: radioGroupApi,

    getRootProps,
  };
};

export default useRadioGroup;

const omittedProps: Array<keyof RadioGroupProps> = [
  'withParts',
  'classNames',
  'value',
  'onValueChange',
  'readOnly',
  'disabled',
  'invalid',
  'initialValue',
  'orientation',
  'name',
];
