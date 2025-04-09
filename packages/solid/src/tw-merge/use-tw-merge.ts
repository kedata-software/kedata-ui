import { useContext } from 'solid-js';
import TwMergeContext from './tw-merge-context';
import tw from '@kedata-ui/slots/tw';

const useTwMerge = () => {
  const context = useContext(TwMergeContext);

  return context ?? tw.base;
};

export default useTwMerge;
