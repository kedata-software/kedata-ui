import { defaultObject } from '@kedata-software/toolkit-js';
import { useMemo } from 'react';
import usePresence from 'use-presence';

type AnimateState =
  | 'enter-from'
  | 'enter-active'
  | 'enter-to'
  | 'leave-from'
  | 'leave-active'
  | 'leave-to';

const useAnimateState = (
  state: boolean,
  params?: {
    transitionDuration?: number;
  },
) => {
  const { transitionDuration = 150 } = defaultObject(params);
  const { isVisible, isEntering, isExiting, isMounted } = usePresence(state, {
    transitionDuration,
    initialEnter: true,
  });

  const animateState: AnimateState = useMemo(() => {
    if (state) {
      if (!isVisible) return 'enter-from';
      if (isEntering) return 'enter-active';
      return 'enter-to';
    }

    if (isVisible) return 'leave-from';
    if (isExiting) return 'leave-active';
    return 'leave-to';
  }, [state, isVisible, isEntering, isExiting]);

  const isPresence = (isEntering && state) || isMounted;

  return {
    isPresence,
    animateState,
  };
};

export default useAnimateState;
