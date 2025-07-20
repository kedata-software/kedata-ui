import { errorMessageSlots, tw } from '@kedata-ui/slots';
import { computed, type HTMLAttributes } from 'vue';
import type { ErrorMessageProps } from './index.types';
import { useColorPalette } from '../use-color-palette';

const useErrorMessage = (props: ErrorMessageProps) => {
  const colorPaletteClass = useColorPalette(() => props.colorPalette, 'danger');

  const slots = computed(() => {
    return errorMessageSlots({
      withParts: props.withParts,
    });
  });

  const getRootProps = () => {
    return {
      class: tw(colorPaletteClass.value, slots.value.root(), props.class),
    } as HTMLAttributes;
  };

  return {
    getRootProps,
  };
};

export default useErrorMessage;
