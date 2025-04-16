import clsx from 'clsx';
import { tv, type VariantProps } from 'tailwind-variants';
import tagParts from './tag.parts';

const tagSlots = tv(
  {
    slots: {
      root: clsx(
        'inline-flex items-center rounded-md px-3 py-1 text-sm',
        'focus-visible:outline-palette-300 focus-visible:outline-2 focus-visible:outline-offset-2',
        'data-[highlighted]:outline-palette-300 data-[highlighted]:outline data-[highlighted]:outline-2 data-[highlighted]:outline-offset-2',
      ),
      closeIcon: clsx('ml-1 size-3 text-white'),
    },
    variants: {
      withParts: {
        true: tagParts,
      },
      variant: {
        solid: {
          root: ['bg-palette-500 text-white'],
          closeIcon: ['text-white'],
        },
        subtle: {
          root: ['text-palette-500 bg-palette-100'],
          closeIcon: ['text-palette-500'],
        },
        outline: {
          root: ['text-palette-500 border-palette-500 border'],
          closeIcon: ['text-palette-500'],
        },
      },
    },
    defaultVariants: {
      withParts: true,
      variant: 'subtle',
    },
  },
  { twMerge: false },
);

type TagSlots = typeof tagSlots;
export type TagVariant = NonNullable<VariantProps<TagSlots>['variant']>;
export type TagClassNames = Partial<TagSlots['slots']>;
export type TagIds = Partial<TagSlots['slots']>;

export default tagSlots;
