import { useEffect } from 'react';

/**
 * @description
 * This hook is used to hold the dialog when it is opened.
 */
const useDialogHolder = (visibility: boolean) => {
  let timeoutRef: NodeJS.Timeout | null = null;

  useEffect(() => {
    if (timeoutRef) {
      clearTimeout(timeoutRef);
    }

    if (visibility) {
      document.body.setAttribute('data-hold-dialog', '');
    } else {
      timeoutRef = setTimeout(() => {
        document.body.removeAttribute('data-hold-dialog');
      }, 300);
    }
  }, [visibility]);
};

export default useDialogHolder;
