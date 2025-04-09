import { defaultObject } from '@kedata-software/toolkit-js';
import { createPresence } from '@solid-primitives/presence';
import { createMemo, type Accessor } from 'solid-js';

type AnimateState =
  | 'enter-from'
  | 'enter-active'
  | 'enter-to'
  | 'leave-from'
  | 'leave-active'
  | 'leave-to';

const createAnimateState = (
  state: Accessor<boolean>,
  params?: {
    transitionDuration?: number;
  },
) => {
  const { transitionDuration = 150 } = defaultObject(params);
  const { isVisible, isEntering, isExiting, isMounted } = createPresence(
    state,
    {
      transitionDuration,
      initialEnter: true,
    },
  );

  const animateState: Accessor<AnimateState> = createMemo(() => {
    if (state()) {
      if (!isVisible()) return 'enter-from';
      if (isEntering()) return 'enter-active';
      return 'enter-to';
    }

    if (isVisible()) return 'leave-from';
    if (isExiting()) return 'leave-active';
    return 'leave-to';
  });

  const isPresence = createMemo(() => (isEntering() && state()) || isMounted());

  return {
    isPresence,
    animateState,
  };
};

export default createAnimateState;
