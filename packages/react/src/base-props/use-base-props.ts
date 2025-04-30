import { useContext, useId } from 'react';
import BasePropsContext from './base-props-context';
import type { BasePropsContextValue } from './index.types';

const EMPTY_OBJECT = {};

function useBaseProps<
  C extends keyof BasePropsContextValue,
  P extends { id?: string },
>(componentName: C, props?: P, defaultProps?: Partial<P>) {
  const baseId = useId();
  const id = props?.id ?? baseId;
  const baseProps = useContext(BasePropsContext);
  const componentProps = baseProps?.[componentName] ?? EMPTY_OBJECT;

  return {
    ...defaultProps,
    ...componentProps,
    ...props,
    id,
  } as P & BasePropsContextValue[C] & { id: string };
}

export default useBaseProps;
