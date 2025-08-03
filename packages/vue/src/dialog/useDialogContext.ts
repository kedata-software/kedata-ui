import type { DialogContext } from './index.types';
import { DialogContextKey } from './DialogContext';
import { inject } from 'vue';

const useDialogContext = () => {
  const ctx = inject<DialogContext>(DialogContextKey);

  if (!ctx) {
    throw new Error(
      'DialogContext not found. Please make sure you are using the `withDialog` HOC.',
    );
  }

  return {
    close: ctx?.close,
  };
};

export default useDialogContext;
