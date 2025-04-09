import { renderHook } from '@solidjs/testing-library';
import useControlledState from '../create-controlled-signal';
import { describe, test, expect, vitest } from 'vitest';

describe('useControlledState', () => {
  test('should use initial value when no controlled value is provided', () => {
    const { result } = renderHook(() =>
      useControlledState<number>(() => undefined, undefined, 10),
    );

    const [value] = result;
    expect(value()).toBe(10);
  });

  test('should use controlled value when provided', () => {
    const { result } = renderHook(() =>
      useControlledState<number>(() => 20, undefined, 10),
    );

    const [value] = result;
    expect(value()).toBe(20);
  });

  test('should update when setControlledValue is called', () => {
    const setValue = vitest.fn();
    const { result } = renderHook(() =>
      useControlledState<number>(() => undefined, setValue, 10),
    );

    const [, setControlledValue] = result;

    setControlledValue(30);

    const [value] = result;

    expect(value()).toBe(30);
    expect(setValue).toHaveBeenCalledWith(30);
  });

  test('should call external setValue when provided', () => {
    const setValue = vitest.fn();

    const { result } = renderHook(() =>
      useControlledState<number>(() => undefined, setValue, 10),
    );

    const [, setControlledValue] = result;

    setControlledValue(40);

    expect(setValue).toHaveBeenCalledWith(40);
  });
});
