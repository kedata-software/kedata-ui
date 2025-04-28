import {
  type FieldValues,
  type FieldPath,
  type FieldPathValue,
  type Maybe,
  type FieldType,
  type PartialValues,
  type ValidateForm,
} from '@modular-forms/solid';
import type { JSX } from 'solid-js';

export type FieldRef = {
  focus?: () => void;
  blur?: () => void;
};

export type FieldRefItem = {
  name: string;
  ref: FieldRef;
};

export type ExtFieldProps<
  TFieldValues extends FieldValues,
  TFieldName extends FieldPath<TFieldValues>,
> = {
  name: TFieldName;
  type: FieldType<FieldPathValue<TFieldValues, TFieldName>>;

  children: (
    props: {
      value: Maybe<FieldPathValue<TFieldValues, TFieldName>>;
      onValueChange: (value: FieldPathValue<TFieldValues, TFieldName>) => void;
      ref: (el: FieldRef) => void;
      invalid: boolean;
      id: string;
      name: string;
    },
    field: {
      error?: string;
      invalid: boolean;
      for: string;
      name: string;
    },
  ) => JSX.Element;
};

export type CreateModularFormParams<TFieldValues extends FieldValues> = {
  /**
   * The initial values of the form.
   */
  initialValues?: PartialValues<TFieldValues>;
  /**
   * The validation function for the form. You can use Valibot or Zod for schema validation.
   * @link https://modularforms.dev/solid/guides/validate-your-fields
   */
  validate?: ValidateForm<TFieldValues>;
  /**
   * If true, the form will focus on the first invalid field when the form is submitted.
   * @default true
   */
  focusOnError?: boolean;
};
