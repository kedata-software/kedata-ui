import clsx from 'clsx';
import { tv } from 'tailwind-variants';
import chatBubbleParts from './chat-bubble.parts';

const chatBubbleSlots = tv({
  slots: {
    root: 'color-palette-primary flex flex-col data-[variant="question"]:ml-auto data-[variant="answer"]:mr-auto',
    bubble: clsx(
      'py-3 px-4 rounded-lg mb-2',
      'data-[variant="question"]:bg-palette-500 data-[variant="question"]:rounded-tr-none data-[variant="question"]:text-white',
      'data-[variant="answer"]:bg-palette-50 data-[variant="answer"]:rounded-tl-none data-[variant="answer"]:text-dark-900',
    ),
    time: 'text-xs text-dark-400 data-[variant="question"]:mr-auto data-[variant="answer"]:ml-auto',
    footer: 'flex w-full',
  },
  variants: {
    withParts: {
      true: chatBubbleParts,
    },
  },
  defaultVariants: {
    withParts: true,
  },
});

type ChatBubbleSlots = typeof chatBubbleSlots;
export type ChatBubbleClassNames = Partial<ChatBubbleSlots['slots']>;
export type ChatBubbleVariant = NonNullable<
  VariantProps<ChatBubbleSlots>['variant']
>;

export default chatBubbleSlots;
