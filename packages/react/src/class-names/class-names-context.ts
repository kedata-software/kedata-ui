import { createContext } from 'react';
import type { ClassNamesContextValue } from './index.types';

const ClassNamesContext = createContext<ClassNamesContextValue | undefined>(
  undefined,
);

export default ClassNamesContext;
