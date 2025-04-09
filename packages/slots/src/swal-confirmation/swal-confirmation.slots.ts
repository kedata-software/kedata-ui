import clsx from 'clsx';
import swalConfirmationParts from './swal-confirmation.parts';
import { tv } from 'tailwind-variants';

const swalConfirmationSlots = tv(
  {
    slots: {
      root: clsx('max-w-[35rem] w-full'),
      icon: clsx('text-palette-500 size-8'),
      iconBox: clsx(
        'size-14 rounded-md flex items-center justify-center bg-palette-50',
      ),
      content: clsx('text-left'),
      body: clsx(
        'p-10 bg-white rounded-t-lg border-b border-dark-300 flex gap-4',
      ),
      title: clsx('text-palette-500 font-bold'),
      text: clsx(''),
      footer: clsx(
        'p-5 bg-white rounded-b-lg flex gap-3 justify-between items-center',
      ),
      footerLeft: clsx(''),
      footerRight: clsx('flex gap-3 ml-auto'),
    },
    variants: {
      withParts: {
        true: swalConfirmationParts,
      },
    },
    defaultVariants: {
      withParts: true,
    },
  },
  {
    twMerge: false,
  },
);

type SwalConfirmationSlots = typeof swalConfirmationSlots;
export type SwalConfirmationClassNames = Partial<
  SwalConfirmationSlots['slots']
>;
export type SwalConfirmationIds = Partial<SwalConfirmationSlots['slots']>;

export default swalConfirmationSlots;
