import { createContext } from 'solid-js';
import type { ClassNamesContextValue } from './index.types';

const ClassNamesContext = createContext<ClassNamesContextValue | undefined>(
  undefined,
);

export default ClassNamesContext;
