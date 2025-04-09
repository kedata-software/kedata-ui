import SwalAlert from './swal-alert';
import { useClassNames } from '../class-names';
import { useTwMerge } from '../tw-merge';
import type { SwalAlertFireProps } from '.';

const createSwalAlert = () => {
  const classNames = useClassNames('SwalAlert');
  const twMerge = useTwMerge();

  return {
    fire<D = unknown>(props: SwalAlertFireProps<D>) {
      SwalAlert.fire<D>({
        twMerge,
        ...props,
        classNames: {
          ...classNames,
          ...props.classNames,
        },
      });
    },
    done<D = unknown>(props: SwalAlertFireProps<D>) {
      SwalAlert.fire<D>({
        twMerge,
        colorPalette: 'primary',
        showDenyButton: false,
        ...props,
        classNames: {
          ...classNames,
          ...props.classNames,
        },
      });
    },
    error<D = unknown>(props: SwalAlertFireProps<D>) {
      SwalAlert.fire<D>({
        twMerge,
        colorPalette: 'danger',
        showDenyButton: false,
        ...props,
        classNames: {
          ...classNames,
          ...props.classNames,
        },
      });
    },
  };
};

export default createSwalAlert;
