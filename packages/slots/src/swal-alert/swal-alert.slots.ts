import { tv } from 'tailwind-variants';
import swalAlertParts from './swal-alert.parts';

const swalAlertSlots = tv(
  {
    slots: {
      root: 'p-12 color-palette-primary',
      footer: 'mt-6 flex items-center justify-center gap-2',
      title: 'text-palette-500 text-2xl font-bold',
      content: 'flex flex-col gap-2',
      text: '',
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
