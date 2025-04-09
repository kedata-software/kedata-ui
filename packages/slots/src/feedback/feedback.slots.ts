import clsx from 'clsx';
import { tv } from 'tailwind-variants';
import feedbackParts from './feedback.parts';

const feedbackSlots = tv(
  {
    slots: {
      root: clsx('flex min-h-52 flex-col items-center justify-center'),
      icon: clsx('text-palette-500 mb-2 size-24'),
      title: clsx('text-palette-500 text-3xl font-bold'),
      message: clsx('mt-1'),
    },
    variants: {
      withParts: {
        true: feedbackParts,
      },
    },
    defaultVariants: {
      withParts: true,
    },
  },
  { twMerge: false },
);

type FeedbackSlots = typeof feedbackSlots;
export type FeedbackIds = Partial<FeedbackSlots['slots']>;
export type FeedbackClassNames = Partial<FeedbackSlots['slots']>;

export default feedbackSlots;
