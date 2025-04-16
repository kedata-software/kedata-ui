import clsx from 'clsx';
import { tv } from 'tailwind-variants';
import switchParts from './switch.parts';

const switchSlots = tv(
  {
    slots: {
      root: clsx(
        'group/switch flex w-fit cursor-pointer rounded-full',
        'data-[disabled]:cursor-not-allowed',
        'focus-visible:outline-none',
      ),
      control: clsx(
        'inline-flex w-10 rounded-full bg-gray-300 p-1 transition-colors',
        'data-[checked]:bg-palette-500',
        'data-[checked]:data-[disabled]:bg-palette-300',
        'group-focus-within/switch:outline-palette-300 group-focus-within/switch:outline group-focus-within/switch:outline-2 group-focus-within/switch:outline-offset-2',
      ),
      thumb: clsx(
        'size-4 rounded-full bg-white transition-all',
        'data-[checked]:translate-x-4',
      ),
      label: clsx('ml-2'),
      hiddenInput: clsx(''),
    },
    variants: {
      withParts: {
        true: switchParts,
      },
    },
    defaultVariants: {
      withParts: true,
    },
  },
  { twMerge: false },
);

type SwitchSlots = typeof switchSlots;
export type SwitchClassNames = Partial<SwitchSlots['slots']>;
export type SwitchIds = Partial<SwitchSlots['slots']>;

export default switchSlots;
