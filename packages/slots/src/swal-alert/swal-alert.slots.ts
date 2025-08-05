import { tv } from 'tailwind-variants';
import swalAlertParts from './swal-alert.parts';

const swalAlertSlots = tv(
  {
    slots: {
      root: 'p-12',
      footer: 'mt-6 flex items-center justify-center gap-2',
      title: 'text-palette-500 text-2xl font-bold text-center',
      content: 'flex flex-col gap-2',
      text: 'text-center',
      icon: 'size-20 text-palette-500 mx-auto mb-5',
    },
    variants: {
      withParts: {
        true: swalAlertParts,
      },
    },
    defaultVariants: {
      withParts: true,
    },
  },
  { twMerge: false },
);

type SwalAlertSlots = typeof swalAlertSlots;
export type SwalAlertClassNames = Partial<SwalAlertSlots['slots']>;
export type SwalAlertIds = Partial<SwalAlertSlots['slots']>;

export default swalAlertSlots;
