import { describe, it, expect } from 'vitest';
import { renderHook } from '@solidjs/testing-library';
import createDialogStore from '../create-dialog-store';

describe('useDialogState', () => {
  it('Should set open and loaded state', async () => {
    const { result } = renderHook(() => {
      return createDialogStore();
    });

    expect(result.isOpen()).toBe(false);
    expect(result.isLoaded()).toBe(false);

    result.open();

    expect(result.isOpen()).toBe(true);
    expect(result.isLoaded()).toBe(true);
  });

  it('Should close dialog', async () => {
    const { result } = renderHook(() => {
      return createDialogStore();
    });

    expect(result.isOpen()).toBe(false);

    result.close();

    expect(result.isOpen()).toBe(false);
  });
});
