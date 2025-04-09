import { useBaseProps } from '../base-props';
import { useClassNames } from '../class-names';
import { useTwMerge } from '../tw-merge';
import { helperTextSlots } from '@kedata-ui/slots/helper-text';
import {
  createMemo,
  mergeProps,
  splitProps,
  type ComponentProps,
  type ValidComponent,
} from 'solid-js';
import type { HelperTextProps } from './index.types';
import type { PropsGetterParams } from '../types';

const useHelperText = (inProps: HelperTextProps) => {
  const props = useBaseProps('HelperText', inProps);
  const classNames = useClassNames('HelperText', inProps);

  const twMerge = useTwMerge();

  const slots = createMemo(() => {
    return helperTextSlots({
      withParts: props.withParts,
    });
  });

  const [, rootProps] = splitProps(props, omittedProps);

  const getRootProps = <T extends ValidComponent = 'div'>(
    params: PropsGetterParams = {},
  ) => {
    return mergeProps(
      () => rootProps,
      () => ({
        class: twMerge(
          slots().root(),
          classNames()?.root,
          props.class,
          params.className,
        ),
      }),
    ) as ComponentProps<T>;
  };

  return {
    getRootProps,
  };
};

export default useHelperText;

const omittedProps: Array<keyof Omit<HelperTextProps, 'ref'>> = [
  'withParts',
  'classNames',
  'ids',
];
