import { createContext, useContext } from 'solid-js';
import type { DialogContextValue } from './index.types';

const context = createContext<DialogContextValue | undefined>(undefined);

const DialogProvider = context.Provider;

const useDialogContext = () => {
  const contextValue = useContext(context);

  return contextValue;
};

export { DialogProvider, useDialogContext };
