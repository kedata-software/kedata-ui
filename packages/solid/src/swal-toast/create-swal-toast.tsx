import {
  KiCheckCircleSolid,
  KiExclamationSolid,
  KiInfoCircleSolid,
} from '@kedata-ui/solid-icons';
import type { SwalToastFireProps } from './index.types';
import SwalToast from './swal-toast';

const createSwalToast = () => {
  return {
    success: (props: SwalToastFireProps) => {
      return SwalToast.fire({
        colorPalette: 'success',
        icon: (props) => <KiCheckCircleSolid {...props} />,
        ...props,
      });
    },
    error: (props: SwalToastFireProps) => {
      return SwalToast.fire({
        colorPalette: 'danger',
        icon: () => <KiExclamationSolid {...props} />,
        ...props,
      });
    },
    info: (props: SwalToastFireProps) => {
      return SwalToast.fire({
        colorPalette: 'info',
        icon: () => <KiInfoCircleSolid {...props} />,
        ...props,
      });
    },
  };
};

export default createSwalToast;
