import { LabelProps } from './index.types';
import { useBaseProps } from '../base-props';
import { useClassNames } from '../class-names';
import { useTwMerge } from '../tw-merge';
import { omitProps } from '@kedata-software/toolkit-js';
import { labelSlots } from '@kedata-ui/slots/label';
import clsx from 'clsx';
import type { PropsGetterParams } from '../types';
import { useMemo, type ComponentProps } from 'react';

const useLabel = (inProps: LabelProps) => {
  const props = useBaseProps('Label', inProps);
  const classNames = useClassNames('Label', inProps);
  const twMerge = useTwMerge();

  const slots = useMemo(() => {
    return labelSlots({
      withParts: props.withParts,
    });
  }, [props.withParts]);

  const getRootProps = <T extends keyof JSX.IntrinsicElements = 'label'>(
    params: PropsGetterParams = {},
  ) => {
    return {
      ...omitProps(props, omittedProps),
      class: twMerge(
        clsx(slots.root(), classNames?.root, props.className, params.className),
      ),
    } as ComponentProps<T>;
  };

  const getAsteriskProps = <T extends keyof JSX.IntrinsicElements = 'span'>(
    params: PropsGetterParams = {},
  ) => {
    return {
      class: twMerge(
        clsx(slots.asterisk(), classNames?.asterisk, params.className),
      ),
      children: '*',
    } as ComponentProps<T>;
  };

  return {
    showAsterisk: props.showAsterisk,
    required: props.required,
    children: props.children,

    getRootProps,
    getAsteriskProps,
  };
};

export default useLabel;

const omittedProps: Array<keyof Omit<LabelProps, 'ref'>> = [
  'withParts',
  'ids',
  'required',
  'classNames',
  'showAsterisk',
];
