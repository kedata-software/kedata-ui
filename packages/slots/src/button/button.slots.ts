import clsx from 'clsx';
import { tv, type VariantProps } from 'tailwind-variants';
import buttonParts from './button.parts';

const buttonSlots = tv(
  {
    slots: {
      root: clsx(
        'group/button flex cursor-pointer items-center font-[inherit] transition-colors justify-center',
        'disabled:cursor-not-allowed',
      ),
      loadingIcon: 'flex-shrink-0',
      startIcon: 'flex-shrink-0',
      endIcon: 'flex-shrink-0',
    },
    variants: {
      withParts: {
        true: buttonParts,
      },
      colorPalette: {
        dark: '',
        primary: '',
        danger: '',
        success: '',
        warning: '',
        info: '',
        neutral: '',
      },
      size: {
        small: {
          root: 'min-h-[2rem] rounded-md px-4 text-sm gap-2',
          lodingIcon: 'size-3',
          startIcon: 'size-3',
          endIcon: 'size-3',
        },
        medium: {
          root: 'min-h-[3rem] rounded-lg px-6 gap-2.5',
          lodingIcon: 'size-4',
          startIcon: 'size-4',
          endIcon: 'size-4',
        },
        large: {
          root: 'min-h-[3.5rem] rounded-lg px-8 gap-3',
          lodingIcon: 'size-5',
          startIcon: 'size-5',
          endIcon: 'size-5',
        },
      },
      variant: {
        solid: {
          root: [
            'bg-palette-500 text-white',
            'hover:bg-palette-800',
            'aria-expanded:bg-palette-800',
            'disabled:bg-palette-400 disabled:text-palette-50',
            'aria-busy:disabled:bg-palette-900 aria-busy:disabled:text-white',
            'focus-visible:outline-palette-300 focus-visible:outline-2 focus-visible:outline-offset-2',
            'dark:focus-visible:outline-palette-300 dark:focus-visible:outline-3 dark:focus-visible:outline-offset-2',
          ],
        },
        outline: {
          root: [
            'text-palette-500 text-palette-500 border border-gray-300 bg-white',
            'disabled:text-palette-300 disabled:bg-palette-50',
            'hover:bg-palette-50',
            'dark:text-white dark:border-dark-600 dark:hover:bg-dark-600 dark:bg-dark-800 data-[expanded]:dark:bg-dark-600',
            'focus-visible:outline-palette-300 focus-visible:outline-2 focus-visible:outline-offset-2',
          ],
        },
        text: {
          root: [
            'text-palette-500 bg-transparent',
            'hover:bg-palette-50',
            'disabled:bg-palette-50 disabled:text-palette-300',
            'aria-busy:disabled:text-palette-500',
            'dark:text-white',
          ],
        },
      },
    },
    defaultVariants: {
      variant: 'solid',
      size: 'medium',
      withParts: true,
    },
    compoundSlots: [
      {
        colorPalette: 'dark',
        variant: 'solid',
        className: 'bg-palette-600 hover:bg-palette-700',
        slots: ['root'],
      },
    ],
  },
  {
    twMerge: false,
  },
);

type ButtonSlots = typeof buttonSlots;
export type ButtonVariant = NonNullable<VariantProps<ButtonSlots>['variant']>;
export type ButtonSize = NonNullable<VariantProps<ButtonSlots>['size']>;
export type ButtonClassNames = Partial<ButtonSlots['slots']>;
export type ButtonIds = Partial<ButtonSlots['slots']>;

export default buttonSlots;
