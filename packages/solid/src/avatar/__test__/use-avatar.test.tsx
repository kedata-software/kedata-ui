import { renderHook } from '@solidjs/testing-library';
import useAvatar from '../use-avatar';
import { describe, it, expect } from 'vitest';
import { createRoot } from 'solid-js';

const classes = {
  root: {
    class: 'root',
  },
  fallback: {
    class: 'fallback',
  },
  image: {
    class: 'image',
  },
};

describe('useAvatar', () => {
  it('Should set className in getters', () => {
    const { result, owner } = renderHook(() => {
      return useAvatar({});
    });

    createRoot(() => {
      expect(result.getRootProps(classes.root).class).toContain('root');
      expect(result.getFallbackProps(classes.fallback).class).toContain(
        'fallback',
      );
      expect(result.getImageProps(classes.image).class).toContain('image');
    }, owner);
  });
});
