import { badgeSlots } from '@kedata-ui/slots';
import { computed, type HTMLAttributes } from 'vue';
import type { BadgeProps } from './index.types';
import { useColorPalette } from '../use-color-palette';

const useBadge = (props: BadgeProps) => {
  const colorPaletteClassName = useColorPalette(() => props.colorPalette);
  const slots = computed(() => {
    return badgeSlots({
      withParts: props.withParts,
      variant: props.variant,
    });
  });

  const getRootProps = () => {
    return {
      class: [colorPaletteClassName.value, slots.value.root(), props.class],
    } as HTMLAttributes;
  };

  return {
    slots,
    getRootProps,
  };
};

export default useBadge;
