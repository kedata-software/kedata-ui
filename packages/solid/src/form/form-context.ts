import type { FormBaseProps } from './index.types';
import { createContext } from 'solid-js';

const FormContext = createContext<FormBaseProps | undefined>(undefined);

export default FormContext;
