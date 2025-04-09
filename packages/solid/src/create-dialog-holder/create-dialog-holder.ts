import { createEffect, type Accessor } from 'solid-js';

/**
 * @description
 * This hook is used to hold the dialog when it is opened.
 */
const createDialogHolder = (visibilityFn: Accessor<boolean>) => {
  let timeoutRef: NodeJS.Timeout | null = null;

  createEffect(() => {
    if (timeoutRef) {
      clearTimeout(timeoutRef);
    }

    if (visibilityFn()) {
      document.body.setAttribute('data-hold-dialog', '');
    } else {
      timeoutRef = setTimeout(() => {
        document.body.removeAttribute('data-hold-dialog');
      }, 300);
    }
  });
};

export default createDialogHolder;
