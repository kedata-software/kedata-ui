import { tv } from 'tailwind-variants';
import colorInputParts from './color-input.parts';
import { inputSlots } from '../input';
import clsx from 'clsx';

const colorInputSlots = tv(
  {
    slots: {
      root: clsx(inputSlots.slots.inputWrapper, ' color-palette-primary'),
      inputWrapper: clsx('flex gap-2 items-center'),
      indicator:
        'bg-[--color-input-value] size-4 rounded-full ml-3 border border-dark-300',
      value: 'bg-dark-50',
      hiddenInput: '',
      positioner: '',

      ColorInput: 'border border-dark-300 rounded-lg w-[400px]',
    },
    variants: {
      withParts: {
        true: colorInputParts,
      },
    },
    defaultVariants: {
      withParts: true,
    },
  },
  { twMerge: false },
);

type ColorInputSlots = typeof colorInputSlots;
export type ColorInputClassNames = Partial<ColorInputSlots['slots']>;
export type ColorInputIds = Partial<ColorInputSlots['slots']>;

export default colorInputSlots;
