import { clsx } from 'clsx';
import { extendTailwindMerge, type ClassNameValue } from 'tailwind-merge';

type AdditionalClassGroupIds = 'color-palette' | 'text-body' | 'text-btn';

const twMerge = extendTailwindMerge<AdditionalClassGroupIds, never>({
  extend: {
    classGroups: {
      'color-palette': [
        {
          'color-palette': [(value: string) => Boolean(value)],
        },
      ],
      'text-body': [
        {
          'text-body': ['body-base', 'body-lg', 'body-sm'],
        },
      ],
      'text-btn': [
        {
          'text-btn': ['btn-base', 'btn-lg', 'btn-sm'],
        },
      ],
    },
  },
});

/**
 * @description
 * A utility function that merges class names using `clsx` and `tailwind-merge`.
 */
const tw = (...inputs: ClassNameValue[]) => twMerge(clsx(inputs));

/**
 * @description
 * Only merges class names using `clsx`.
 */
tw.clsx = (...inputs: ClassNameValue[]) => clsx(inputs);

/**
 * @description
 * Only merges class names using `tailwind-merge` without `clsx`.
 */
tw.base = (...inputs: ClassNameValue[]) => twMerge(inputs);

export default tw;
