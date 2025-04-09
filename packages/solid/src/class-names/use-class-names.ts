import clsx from 'clsx';
import ClassNamesContext from './class-names-context';
import { createMemo, useContext, type Accessor } from 'solid-js';
import type { ClassNamesContextValue } from './index.types';

const useClassNames = <
  C extends keyof ClassNamesContextValue,
  P extends { classNames?: ClassNamesContextValue[C] },
>(
  component: C,
  props?: P,
) => {
  const classNamesContext = useContext(ClassNamesContext);

  if (!classNamesContext) {
    if (!props?.classNames) {
      const classNames = createMemo(() => ({})) as Accessor<
        ClassNamesContextValue[C]
      >;

      return classNames;
    }

    const classNames = createMemo(() => ({
      ...props.classNames,
    })) as Accessor<ClassNamesContextValue[C]>;

    return classNames;
  }

  const classNames = createMemo(() => {
    return mergeClassNames(
      clsx,
      classNamesContext[component],
      props?.classNames,
    ) as ClassNamesContextValue[C];
  });

  return classNames;
};

const mergeClassNames = <C extends Record<string, any>>(
  mergeFn: (...inputs: any[]) => string,
  prev?: C,
  target?: C,
): C => {
  let result = { ...prev, ...target };

  let merge = <C extends { [K: string]: any }>(
    result: { [K: string]: any },
    prev?: C,
    target?: C,
  ) => {
    if (prev === undefined) {
      return;
    }

    Object.keys(prev).forEach((key) => {
      if (target === undefined) return;

      if (typeof target[key] === 'object') {
        if (typeof prev[key] !== 'object') {
          result[key] = target[key];
          return;
        }

        merge(prev[key], target[key], result[key]);
        return;
      }

      if (!result?.[key]) {
        result[key] = '';
      }

      result[key] = mergeFn(prev[key], target[key]);
    });
  };

  merge(result, prev, target);

  return result as C;
};

export default useClassNames;
