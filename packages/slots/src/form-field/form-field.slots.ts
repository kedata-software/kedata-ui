import type { HelperTextClassNames } from '../helper-text';
import type { LabelClassNames } from '../label';
import { tv } from 'tailwind-variants';
import formFieldParts from './form-field.parts';
import clsx from 'clsx';
import type { ErrorMessageClassNames } from '../error-message';
import type { ErrorListClassNames } from '../error-list';

const formFieldSlots = tv(
  {
    slots: {
      root: 'flex flex-col',
      body: 'data-[label-placement="left"]:w-full',
      footer: 'mt-1 flex',
      label: '',
    },
    variants: {
      withParts: {
        true: formFieldParts,
      },
      labelPlacement: {
        left: {
          root: 'flex-row gap-4',
          label: clsx(
            'h-12 flex items-center justify-end',
            'text-base text-dark-800 dark:text-dark-400',
          ),
        },
        top: {},
      },
    },
    defaultVariants: {
      withParts: true,
      labelPlacement: 'top',
    },
  },
  { twMerge: false },
);

type FormFieldSlots = typeof formFieldSlots;
export type FormFieldIds = Partial<FormFieldSlots['slots']>;
export type FormFieldClassNames = Omit<
  Partial<FormFieldSlots['slots']>,
  'label'
> & {
  Label?: LabelClassNames;
  ErrorMessage?: ErrorMessageClassNames;
  ErrorList?: ErrorListClassNames;
  HelperText?: HelperTextClassNames;
};

export default formFieldSlots;
