import { createContext } from 'react';
import type { CheckboxGroupContextValue } from './index.types';

const CheckboxGroupContext = createContext<CheckboxGroupContextValue | null>(
  null,
);

export default CheckboxGroupContext;
