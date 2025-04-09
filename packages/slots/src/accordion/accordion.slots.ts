import accordionParts from './accordion.parts';
import { tv } from 'tailwind-variants';

const accordionSlots = tv({
  slots: {
    root: 'flex flex-col',
    item: 'w-full',
    itemHeader: 'p-4 border-b border-dark-300 w-full flex flex-col text-left',
    itemIndicator: '',
    itemTitle: '',
    itemContent: '',
    itemBody: 'p-4 bg-dark-50 rounded-b-md',
  },
  variants: {
    withParts: {
      true: accordionParts,
    },
  },
  defaultVariants: {
    withParts: true,
  },
});

type AccordionSlots = typeof accordionSlots;
export type AccordionClassNames = Partial<AccordionSlots['slots']>;

export default accordionSlots;
