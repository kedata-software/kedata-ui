import { ref } from "vue";

const createDialogStore = () => {
  const isOpen = ref(false);
  const isLoaded = ref(false);

  const close = () => {
    isOpen.value = false;
  };

  const open = () => {
    isOpen.value = true;
    isLoaded.value = true;
  };

  return {
    isOpen,
    isLoaded,

    close,
    open,
  };
};

export type CreateDialogStoreReturn = ReturnType<typeof createDialogStore>;

export default createDialogStore;
