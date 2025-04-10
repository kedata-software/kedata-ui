import { createBreakpoints } from '@solid-primitives/media';
import { createSignal, onMount } from 'solid-js';

const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

const createResponsive = () => {
  const [isReady, setIsReady] = createSignal(false);
  const media = createBreakpoints(breakpoints);

  onMount(() => {
    setIsReady(true);
  });

  return {
    isReady,
    get sm() {
      return media.sm;
    },
    get md() {
      return media.md;
    },
    get lg() {
      return media.lg;
    },
    get xl() {
      return media.xl;
    },
    get '2xl'() {
      return media['2xl'];
    },
  };
};

export default createResponsive;
