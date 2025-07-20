import Swal from 'sweetalert2';
import type { SwalToastProps } from './index.types';
import { tw } from '@kedata-ui/slots';
import { createApp, h } from 'vue';
import SwalToast from './SwalToast.vue';
import {
  KiCheckCircleSolid,
  KiExclamationSolid,
  KiInfoCircleSolid,
} from '@kedata-ui/vue-icons';

const SwalToastMethods = {
  fire(props: SwalToastProps) {
    Swal.fire({
      backdrop: false,
      position: 'top-right',
      timer: props.timeout ?? 3000,
      customClass: {
        container: tw(
          '[&>.swal2-popup]:pb-0',
          '[&_.swal2-html-container]:p-0 [&_.swal2-html-container]:text-base',
        ),
        title: 'hidden',
        htmlContainer: 'p-0',
        popup: 'w-[unset] bg-transparent !shadow-none',
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
              return h(SwalToast, props, {
                icon: props.icon,
                text: props.text,
              });
            },
          }).mount(htmlContainer);
        }
      },
    });
  },
};

const useSwalToast = () => {
  return {
    success: (props: SwalToastProps) => {
      return SwalToastMethods.fire({
        colorPalette: 'success',
        icon: (props) => h(KiCheckCircleSolid, props),
        ...props,
      });
    },
    error: (props: SwalToastProps) => {
      return SwalToastMethods.fire({
        colorPalette: 'danger',
        icon: (props) => h(KiExclamationSolid, props),
        ...props,
      });
    },
    info: (props: SwalToastProps) => {
      return SwalToastMethods.fire({
        colorPalette: 'info',
        icon: (props) => h(KiInfoCircleSolid, props),
        ...props,
      });
    },
  };
};

export default useSwalToast;
