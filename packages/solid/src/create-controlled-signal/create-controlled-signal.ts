import { createMemo, createSignal, type Accessor } from 'solid-js';

const createControlledSignal = <T>(
  value: () => T | undefined,
  setValue: ((newValue: T) => void) | undefined,
  initialValue: T,
) => {
  const [$value, $setValue] = createSignal<T>(value() ?? initialValue);
  const controlledValue = createMemo(() => value() ?? $value());

  const setControlledValue = (newValue: T) => {
    setValue?.(newValue);
    $setValue(() => newValue);
  };

  return [controlledValue, setControlledValue] as [
    Accessor<T>,
    (newValue: T) => void,
  ];
};

export default createControlledSignal;
