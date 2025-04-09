import { useBaseProps } from '../base-props';
import { useClassNames } from '../class-names';
import { FormContext } from '../form';
import { useTwMerge } from '../tw-merge';
import { formFieldSlots } from '@kedata-ui/slots/form-field';
import clsx from 'clsx';
import { createMemo, mergeProps, splitProps, useContext } from 'solid-js';
import type { FormFieldProps } from './index.types';

const useFormField = (inProps: FormFieldProps) => {
  const props = useBaseProps('FormField', inProps);
  const formContext = useContext(FormContext);
  const classNames = useClassNames('FormField', inProps);
  const twMerge = useTwMerge();

  const slots = createMemo(() => formFieldSlots());

  const Component = 'div' as const;

  const isFooterVisible = createMemo(() => !!props.error || !!props.helperText);

  const dataAttrs = createMemo(() => ({
    get 'data-label-placement'() {
      return props.labelPlacement ?? formContext?.labelPlacement;
    },
  }));

  const [, rootProps] = splitProps(props, omittedProps);

  const getRootProps = () => {
    return mergeProps(
      () => dataAttrs(),
      () => rootProps,
      () => ({
        class: twMerge(clsx(slots().root(), classNames()?.root, props.class)),
      }),
    );
  };

  const getLabelProps = () => {
    return mergeProps(
      () => dataAttrs(),
      () => ({
        class: twMerge(
          clsx(
            slots().label(),
            classNames()?.Label?.root,
            formContext?.labelClass,
          ),
        ),
      }),
    );
  };

  const getBodyProps = () => {
    return mergeProps(
      () => dataAttrs(),
      () => ({
        class: twMerge(clsx(slots().body(), classNames()?.body)),
      }),
    );
  };

  const getFooterProps = () => {
    return mergeProps(
      () => dataAttrs(),
      () => ({
        class: twMerge(clsx(slots().footer(), classNames()?.footer)),
      }),
    );
  };

  return {
    Component,
    required: createMemo(() => props.required),
    showAsterisk: createMemo(() => props.showAsterisk),
    label: props.label,
    helperText: props.helperText,
    error: createMemo(() => props.error),
    for: createMemo(() => props.for),
    children: props.children,
    isFooterVisible,
    classNames,

    getRootProps,
    getLabelProps,
    getBodyProps,
    getFooterProps,
  };
};

export default useFormField;

const omittedProps: Array<keyof Omit<FormFieldProps, 'ref'>> = [
  'labelPlacement',
  'label',
  'error',
  'classNames',
  'id',
  'for',
  'children',
  'required',
  'showAsterisk',
  'aria-invalid',
  'onChange',
];
