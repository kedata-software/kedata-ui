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
      root: 'flex flex-col data-[label-placement="left"]:flex-row data-[label-placement="left"]:gap-4',
      body: 'data-[label-placement="left"]:w-full',
      footer: 'mt-1 flex',

      label: clsx(
        'data-[label-placement="left"]:h-12 data-[label-placement="left"]:flex data-[label-placement="left"]:items-center data-[label-placement="left"]:justify-end',
        'data-[label-placement="left"]:text-base data-[label-placement="left"]:text-dark-800',
      ),
    },
    variants: {
      withParts: {
        true: formFieldParts,
      },
    },
    defaultVariants: {
      withParts: true,
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
