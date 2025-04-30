import { createContext } from 'react';
import type { BasePropsContextValue } from './index.types';

const BasePropsContext = createContext<BasePropsContextValue | undefined>(
  undefined,
);

export default BasePropsContext;
