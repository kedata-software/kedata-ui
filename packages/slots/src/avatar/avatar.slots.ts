import clsx from 'clsx';
import { tv } from 'tailwind-variants';
import avatarParts from './avatar.parts';

const avatarSlots = tv({
  slots: {
    root: clsx(
      'rounded-full bg-palette-500 size-9 overflow-hidden flex items-center justify-center',
    ),
    fallback: clsx('text-white uppercase text-sm font-semibold'),
    image: clsx(''),
  },
  variants: {
    withParts: {
      true: avatarParts,
    },
  },
  defaultVariants: {
    withParts: true,
  },
});

type AvatarSlots = typeof avatarSlots;
export type AvatarClassNames = Partial<AvatarSlots['slots']>;
export type AvatarIds = Partial<AvatarSlots['slots']>;

export default avatarSlots;
