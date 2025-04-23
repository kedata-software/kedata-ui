import { LabelProps } from './index.types';
import { useBaseProps } from '../base-props';
import { useClassNames } from '../class-names';
import { useTwMerge } from '../tw-merge';
import { labelSlots } from '@kedata-ui/slots/label';
import clsx from 'clsx';
import {
  createMemo,
  splitProps,
  type Accessor,
  type ComponentProps,
  type ValidComponent,
} from 'solid-js';
import type { PropsGetterParams } from '../types';

const useLabel = (inProps: LabelProps) => {
  const props = useBaseProps('Label', inProps);
  const classNames = useClassNames('Label', inProps);
  const twMerge = useTwMerge();

  const slots = createMemo(() => {
    return labelSlots({
      withParts: props.withParts,
    });
  });

  const [, rootProps] = splitProps(props, omittedProps);

  const getRootProps = <T extends ValidComponent = 'label'>(
    params: PropsGetterParams = {},
  ) => {
    return {
      ...rootProps,
      class: twMerge(
        clsx(slots().root(), classNames()?.root, props.class, params.class),
      ),
    } as ComponentProps<T>;
  };

  const getAsteriskProps = <T extends ValidComponent = 'span'>(
    params: PropsGetterParams = {},
  ) => {
    return {
      class: twMerge(
        clsx(slots().asterisk(), classNames()?.asterisk, params.class),
      ),
      children: '*',
    } as ComponentProps<T>;
  };

  return {
    showAsterisk: (() => props.showAsterisk) as Accessor<boolean | undefined>,
    required: (() => props.required) as Accessor<boolean | undefined>,
    get children() {
      return props.children;
    },

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
