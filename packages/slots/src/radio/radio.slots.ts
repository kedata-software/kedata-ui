import clsx from 'clsx';
import { tv } from 'tailwind-variants';
import radioParts from './radio.parts';

const radioSlots = tv({
  slots: {
    root: clsx(
      'group/radio flex gap-2 cursor-pointer p-3 border border-dark-300 rounded-md px-4 transition-colors',
      'data-[checked]:border-palette-500',
      'bg-dark-50 data-[disabled]:bg-dark-100 data-[disabled]:cursor-not-allowed',
    ),
    control: clsx(
      'flex justify-center items-center',
      'size-5 rounded-full border-2 border-dark-300 transition-colors',
      'group-hover/radio:border-palette-500 group-data-[disabled]/radio:group-hover/radio:border-dark-300',
      'group-data-[checked]/radio:border-palette-500',
    ),
    indicator: clsx(
      'size-0 group-data-[checked]/radio:size-2.5 rounded-full group-data-[checked]/radio:bg-palette-500 transition-all',
    ),
    content: 'flex flex-col gap-1',
    label: clsx('leading-5'),
    description: 'text-sm text-dark-500',
    hiddenInput: 'visually-hidden',
  },
  variants: {
    withParts: {
      true: radioParts,
    },
  },
  defaultVariants: {
    withParts: true,
  },
});

type RadioSlots = typeof radioSlots;
export type RadioClassNames = Partial<RadioSlots['slots']>;
export type RadioIds = Partial<RadioSlots['slots']>;

export default radioSlots;
