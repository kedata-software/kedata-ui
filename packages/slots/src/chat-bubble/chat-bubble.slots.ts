import { tv, type VariantProps } from 'tailwind-variants';
import chatBubbleParts from './chat-bubble.parts';

const chatBubbleSlots = tv({
  slots: {
    root: 'color-palette-primary flex flex-col',
    bubble: 'py-3 px-4 rounded-lg mb-2',
    time: 'text-xs text-dark-400',
    footer: 'flex w-full',
  },
  variants: {
    withParts: {
      true: chatBubbleParts,
    },
    variant: {
      question: {
        root: 'ml-auto',
        bubble: 'bg-palette-500 rounded-tr-none text-white',
        time: 'mr-auto',
      },
      answer: {
        root: 'mr-auto',
        bubble: 'bg-palette-50 rounded-tl-none text-dark-900',
        time: 'ml-auto',
      },
    },
  },
  defaultVariants: {
    withParts: true,
    variant: 'question',
  },
});

type ChatBubbleSlots = typeof chatBubbleSlots;
export type ChatBubbleClassNames = Partial<ChatBubbleSlots['slots']>;
export type ChatBubbleVariant = NonNullable<
  VariantProps<ChatBubbleSlots>['variant']
>;

export default chatBubbleSlots;
