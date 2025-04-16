import { tv, type VariantProps } from 'tailwind-variants';
import badgeParts from './badge.parts';

const badgeSlots = tv(
  {
    slots: {
      root: 'inline-block rounded-full px-2.5 py-1 text-sm color-palette-primary',
    },
    variants: {
      withParts: {
        true: badgeParts,
      },
      variant: {
        subtle: {
          root: 'bg-palette-100 text-palette-500',
        },
      },
    },
    defaultVariants: {
      withParts: true,
    },
  },
  { twMerge: false },
);

type BadgeSlots = typeof badgeSlots;
export type BadgeVariant = NonNullable<VariantProps<BadgeSlots>['variant']>;
export type BadgeClassNames = Partial<BadgeSlots['slots']>;
export type BadgeIds = Partial<BadgeSlots['slots']>;

export default badgeSlots;
