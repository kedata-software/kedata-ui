import { createContext } from 'solid-js';
import type { CheckboxGroupContextValue } from './index.types';

const CheckboxGroupContext = createContext<CheckboxGroupContextValue | null>(
  null,
);

export default CheckboxGroupContext;
