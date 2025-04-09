import BasePropsContext from './base-props-context';
import type { BasePropsContextValue } from './index.types';
import { createUniqueId, mergeProps, useContext } from 'solid-js';

const EMPTY_OBJECT = {};

function useBaseProps<
  C extends keyof BasePropsContextValue,
  P extends { id?: string },
>(componentName: C, props?: P, defaultProps?: Partial<P>) {
  const id = props?.id ?? createUniqueId();
  const baseProps = useContext(BasePropsContext);
  const componentProps = baseProps?.[componentName] ?? EMPTY_OBJECT;

  return mergeProps(defaultProps, componentProps, props, { id }) as P &
    BasePropsContextValue[C] & { id: string };
}

export default useBaseProps;
