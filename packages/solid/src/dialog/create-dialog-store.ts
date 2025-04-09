import type { CreateDialogStoreParams } from './index.types';
import { createSignal } from 'solid-js';

const createDialogStore = (params?: CreateDialogStoreParams) => {
  const [isOpen, setOpen] = createSignal(false);
  const [isLoaded, setLoaded] = createSignal(false);

  const close = () => {
    setOpen(false);
  };

  const open = () => {
    setOpen(true);
    setLoaded(true);
  };

  return {
    isOpen,
    isLoaded,
    transitionDuration: params?.transitionDuration ?? 150,
    close,
    open,
  };
};

export type CreateDialogStoreReturn = ReturnType<typeof createDialogStore>;

export default createDialogStore;
