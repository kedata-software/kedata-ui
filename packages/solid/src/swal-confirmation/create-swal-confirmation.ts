import type { SwalConfirmationFireProps } from './index.types';
import { useClassNames } from '../class-names';
import { useTwMerge } from '../tw-merge';
import type { ColorPalette } from '@kedata-ui/slots';
import SwalConfirmation from './swal-confirmation';

const createSwalConfirmation = () => {
  const classNames = useClassNames('useSwalConfirmation');
  const twMerge = useTwMerge();

  return {
    fire<D = unknown>(inProps: SwalConfirmationFireProps<D>) {
      const props = {
        actionType: 'fire',
        ...inProps,
      };

      SwalConfirmation.fire<D>({
        twMerge,
        ...props,
        classNames: {
          ...classNames,
          ...props.classNames,
        },
      });
    },
    confirm<D = unknown>(inProps: SwalConfirmationFireProps<D>) {
      const props = {
        actionType: 'confirm',
        colorPalette: 'primary' as ColorPalette,
        ...inProps,
      };

      SwalConfirmation.fire<D>({
        twMerge,
        ...props,
        classNames: {
          ...classNames,
          ...props.classNames,
        },
      });
    },
    danger<D = unknown>(inProps: SwalConfirmationFireProps<D>) {
      const props = {
        actionType: 'danger',
        colorPalette: 'danger' as ColorPalette,
        ...inProps,
      };

      SwalConfirmation.fire<D>({
        twMerge,
        ...props,
        classNames: {
          ...classNames,
          ...props.classNames,
        },
      });
    },
    warning<D = unknown>(inProps: SwalConfirmationFireProps<D>) {
      const props = {
        actionType: 'warning',
        colorPalette: 'warning' as ColorPalette,
        ...inProps,
      };

      SwalConfirmation.fire<D>({
        twMerge,
        ...props,
        classNames: {
          ...classNames,
          ...props.classNames,
        },
      });
    },
  };
};

export default createSwalConfirmation;
