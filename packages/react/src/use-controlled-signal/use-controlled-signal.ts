import { useState } from 'react';

const useControlledSignal = <T>(
  value: T | undefined,
  setValue: ((newValue: T) => void) | undefined,
  initialValue: T,
) => {
  const [$value, $setValue] = useState<T>(value ?? initialValue);
  const controlledValue = value ?? $value;

  const setControlledValue = (newValue: T) => {
    setValue?.(newValue);
    $setValue(() => newValue);
  };

  return [controlledValue, setControlledValue] as const;
};

export default useControlledSignal;
