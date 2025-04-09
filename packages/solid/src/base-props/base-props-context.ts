import { createContext } from 'solid-js';
import type { BasePropsContextValue } from './index.types';

const BasePropsContext = createContext<BasePropsContextValue | undefined>(
  undefined,
);

export default BasePropsContext;
