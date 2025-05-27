import { tw, type ColorPalette } from '@kedata-ui/slots';
import Swal from 'sweetalert2';
import { createApp, h } from 'vue';
import type { SwalConfirmationFireProps } from './index.types';
import SwalConfirmation from './SwalConfirmation.vue';

const SwalConfirmationMethods = {
  fire<D = unknown>(props: SwalConfirmationFireProps<D>) {
    Swal.fire({
      title: props.title,
      customClass: {
        container: tw(
          tw(
            '[&>.swal2-popup]:pb-0',
            '[&_.swal2-html-container]:p-0 [&_.swal2-html-container]:text-base',
          ),
        ),
        title: 'hidden',
        htmlContainer: 'p-0',
      },
      didOpen(popup) {
        if (!popup.parentElement) return;

        popup.parentElement.querySelector('#swal2-title')?.remove();

        const actions = popup.querySelector('.swal2-actions');
        if (actions) {
          actions.remove();
        }

        const htmlContainer = popup.querySelector('.swal2-html-container');
        if (htmlContainer) {
          createApp({
            render() {
              return h(
                SwalConfirmation,
                {
                  showConfirmButton: true,
                  showDenyButton: true,
                  ...props,
                  onConfirm: (result) => {
                    Swal.close();
                    props.onConfirm?.(result);
                  },
                  onDeny: (result) => {
                    Swal.close();
                    props.onDeny?.(result);
                  },
                },
                {
                  icon: props.icon,
                  title: props.title,
                  text: props.text,
                  'footer-left': props.footerLeft,
                  'confirm-button-text':
                    props.confirmButtonText ?? (() => 'Confirm'),
                  'deny-button-text': props.denyButtonText ?? (() => 'Cancel'),
                },
              );
            },
          }).mount(htmlContainer);
        }
      },
    });
  },
};

const useSwalConfirmation = () => {
  return {
    fire<D = unknown>(inProps: SwalConfirmationFireProps<D>) {
      const props = {
        actionType: 'fire' as const,
        ...inProps,
      };

      SwalConfirmationMethods.fire<D>(props);
    },
    confirm<D = unknown>(inProps: SwalConfirmationFireProps<D>) {
      const props = {
        actionType: 'confirm' as const,
        colorPalette: 'primary' as ColorPalette,
        ...inProps,
      };

      SwalConfirmationMethods.fire<D>(props);
    },
    danger<D = unknown>(inProps: SwalConfirmationFireProps<D>) {
      const props = {
        actionType: 'danger' as const,
        colorPalette: 'danger' as ColorPalette,
        ...inProps,
      };

      SwalConfirmationMethods.fire<D>(props);
    },
    warning<D = unknown>(inProps: SwalConfirmationFireProps<D>) {
      const props = {
        actionType: 'warning' as const,
        colorPalette: 'warning' as ColorPalette,
        ...inProps,
      };

      SwalConfirmationMethods.fire<D>(props);
    },
  };
};

export default useSwalConfirmation;
