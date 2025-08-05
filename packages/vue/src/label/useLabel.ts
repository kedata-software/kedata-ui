import { labelSlots, tw } from '@kedata-ui/slots';
import { computed } from 'vue';
import type { LabelProps } from './index.types';

const useLabel = (props: LabelProps) => {
  const slots = computed(() => {
    return labelSlots({ withParts: props.withParts });
  });

  const required = computed(() => props.required);
  const showAsterisk = computed(() => props.showAsterisk ?? true);

  const getRootProps = () => {
    return {
      class: tw(slots.value.root(), props.class),
    };
  };

  const getAsteriskProps = () => {
    return {
      class: slots.value.asterisk(),
    };
  };

  return {
    slots,
    required,
    showAsterisk,

    getRootProps,
    getAsteriskProps,
  };
};

export default useLabel;
