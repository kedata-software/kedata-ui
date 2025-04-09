import { tv } from 'tailwind-variants';
import { buttonSlots } from '../button';
import clsx from 'clsx';
import iconButtonParts from './icon-button.parts';

const iconButtonSlots = tv(
  {
    slots: {
      root: clsx(buttonSlots.slots.root, 'justify-center'),
      lodingIcon: buttonSlots.slots.loadingIcon,
      icon: buttonSlots.slots.startIcon,
    },
    variants: {
      withParts: {
        true: iconButtonParts,
      },
      size: {
        small: {
          ...buttonSlots.variants.size.small,
          root: 'min-h-[2rem] min-w-[2rem] rounded-md text-sm',
          icon: buttonSlots.variants.size.small.lodingIcon,
        },
        medium: {
          ...buttonSlots.variants.size.medium,
          root: 'min-h-[3rem] min-w-[3rem] rounded-md',
          icon: buttonSlots.variants.size.medium.lodingIcon,
        },
        large: {
          ...buttonSlots.variants.size.large,
          root: 'min-h-[3.5rem] min-w-[3.5rem] rounded-lg',
          icon: buttonSlots.variants.size.large.lodingIcon,
        },
      },
      variant: buttonSlots.variants.variant,
    },
    defaultVariants: buttonSlots.defaultVariants,
  },
  {
    twMerge: false,
  },
);

type IconButtonSlots = typeof iconButtonSlots;
export type IconButtonClassNames = Partial<IconButtonSlots['slots']>;
export type IconButtonIds = Partial<IconButtonSlots['slots']>;

export default iconButtonSlots;
