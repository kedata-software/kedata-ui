import tw from '@kedata-ui/slots/tw';
import { createContext } from 'solid-js';
import type { ClassNameValue } from 'tailwind-merge';

const TwMergeContext = createContext<
  ((...inputs: ClassNameValue[]) => string) | undefined
>(tw.base);

export default TwMergeContext;
