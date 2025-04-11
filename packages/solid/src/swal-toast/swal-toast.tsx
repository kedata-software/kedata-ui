import tw from '@kedata-ui/slots/tw';
import clsx from 'clsx';
import { render } from 'solid-js/web';
import Swal from 'sweetalert2';
import type { SwalToastFireProps } from './index.types';
import SwalToastContainer from './swal-toast-container';

const SwalToast = {
  fire(props: SwalToastFireProps) {
    const { twMerge = tw.base, timeout = 3000 } = props;

    Swal.fire({
      backdrop: false,
      position: 'top-right',
      timer: timeout,
      customClass: {
        container: twMerge(
          clsx(
            '[&>.swal2-popup]:pb-0',
            '[&_.swal2-html-container]:p-0 [&_.swal2-html-container]:text-base',
          ),
        ),
        title: twMerge(clsx('hidden')),
        htmlContainer: twMerge(clsx('p-0')),
        popup: clsx('w-[unset] bg-transparent !shadow-none'),
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
          render(
            () => <SwalToastContainer twMerge={twMerge} {...props} />,
            htmlContainer,
          );
        }
      },
    });
  },
};

export default SwalToast;
