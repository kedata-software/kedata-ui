import { buttonSlots } from '../button';
import { tv } from 'tailwind-variants';
import paginationParts from './pagination.parts';

const paginationSlots = tv(
  {
    slots: {
      root: 'flex gap-2',
      prevTrigger: '',
      nextTrigger: '',
      item: '',
      ellipsis: '',
    },
    variants: {
      withParts: {
        true: paginationParts,
      },
      size: {
        small: {
          prevTrigger: buttonSlots.variants.size.small.root,
          nextTrigger: buttonSlots.variants.size.small.root,
          item: buttonSlots.variants.size.small.root,
          ellipsis: buttonSlots.variants.size.small.root,
        },
        medium: {
          prevTrigger: buttonSlots.variants.size.medium.root,
          nextTrigger: buttonSlots.variants.size.medium.root,
          item: buttonSlots.variants.size.medium.root,
          ellipsis: buttonSlots.variants.size.medium.root,
        },
        large: {
          prevTrigger: buttonSlots.variants.size.large.root,
          nextTrigger: buttonSlots.variants.size.large.root,
          item: buttonSlots.variants.size.large.root,
          ellipsis: buttonSlots.variants.size.large.root,
        },
      },
      variant: {
        solid: {
          prevTrigger: buttonSlots.variants.variant.solid.root,
          nextTrigger: buttonSlots.variants.variant.solid.root,
          item: buttonSlots.variants.variant.solid.root,
          ellipsis: buttonSlots.variants.variant.solid.root,
        },
        outline: {
          prevTrigger: buttonSlots.variants.variant.outline.root,
          nextTrigger: buttonSlots.variants.variant.outline.root,
          item: buttonSlots.variants.variant.outline.root,
          ellipsis: buttonSlots.variants.variant.outline.root,
        },
        text: {
          prevTrigger: buttonSlots.variants.variant.text.root,
          nextTrigger: buttonSlots.variants.variant.text.root,
          item: buttonSlots.variants.variant.text.root,
          ellipsis: buttonSlots.variants.variant.text.root,
        },
      },
    },
    defaultVariants: {
      withParts: true,
    },
  },
  { twMerge: false },
);

type PaginationSlots = typeof paginationSlots;
export type PaginationClassNames = Partial<PaginationSlots['slots']>;
export type PaginationIds = Partial<PaginationSlots['slots']>;

export default paginationSlots;
