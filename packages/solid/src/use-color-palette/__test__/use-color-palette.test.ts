import { renderHook } from '@solidjs/testing-library';
import { describe, test, expect } from 'vitest';
import useColorPalette from '../use-color-palette';
import colorPaletteClassNames from '../../color-palette-class-names';
import type { ColorPalette } from '@kedata-ui/slots';

describe('useColorPalette', () => {
  test('returns primary color palette class name by default', () => {
    const { result } = renderHook(() => useColorPalette(() => undefined));
    expect(result()).toBe(colorPaletteClassNames.primary);
  });

  test('returns correct class name for each color palette', () => {
    const palettes: ColorPalette[] = [
      'primary',
      'success',
      'danger',
      'dark',
      'neutral',
      'info',
      'warning',
    ];

    palettes.forEach((palette) => {
      const { result } = renderHook(() => useColorPalette(() => palette));
      expect(result()).toBe(colorPaletteClassNames[palette]);
    });
  });

  test('returns specific class names for each palette', () => {
    const expectedClassNames = {
      primary: 'color-palette-primary',
      success: 'color-palette-success',
      danger: 'color-palette-danger',
      dark: 'color-palette-dark',
      neutral: 'color-palette-neutral',
      info: 'color-palette-info',
      warning: 'color-palette-warning',
    };

    Object.entries(expectedClassNames).forEach(([palette, className]) => {
      const { result } = renderHook(() =>
        useColorPalette(() => palette as ColorPalette),
      );
      expect(result()).toBe(className);
    });
  });

  test('handles undefined input by returning primary palette', () => {
    const { result } = renderHook(() => useColorPalette(() => undefined));
    expect(result()).toBe(colorPaletteClassNames.primary);
  });

  test('maintains consistent output for same input', () => {
    const { result: result1 } = renderHook(() =>
      useColorPalette(() => 'success'),
    );
    const { result: result2 } = renderHook(() =>
      useColorPalette(() => 'success'),
    );
    expect(result1()).toBe(result2());
  });

  test('returns different class names for different palettes', () => {
    const { result: result1 } = renderHook(() =>
      useColorPalette(() => 'primary'),
    );
    const { result: result2 } = renderHook(() =>
      useColorPalette(() => 'success'),
    );
    expect(result1()).not.toBe(result2());
  });
});
