import { renderHook } from '@solidjs/testing-library';
import useSwitch from '../use-switch';
import { describe, it, expect } from 'vitest';

describe('useSwitch', () => {
  it('should return checked state', () => {
    const { result } = renderHook(() => useSwitch({ checked: true }));
    expect(result.checked()).toBe(true);
  });
});
