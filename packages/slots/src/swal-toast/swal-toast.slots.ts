import swalToastParts from './swal-toast.parts';
import clsx from 'clsx';
import { tv } from 'tailwind-variants';

const swalToastSlots = tv(
  {
    slots: {
      root: clsx(
        'px-5 py-4 bg-palette-500 rounded-lg min-w-[540px] flex items-center gap-2',
      ),
      content: clsx(''),
      body: clsx('text-white text-left'),
      icon: clsx('text-white size-7'),
    },
    variants: {
      withParts: {
        true: swalToastParts,
      },
    },
  },
  { twMerge: false },
);

export type SwalToastSlots = typeof swalToastSlots;
export type SwalToastClassNames = Partial<SwalToastSlots['slots']>;
export type SwalToastIds = Partial<SwalToastSlots['slots']>;

export default swalToastSlots;
