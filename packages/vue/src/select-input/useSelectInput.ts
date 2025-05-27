import {
  computed,
  effect,
  useId,
  type HTMLAttributes,
  type SVGAttributes,
} from 'vue';
import type { SelectInputModels, SelectInputProps } from './index.types';
import { selectInputSlots, tw } from '@kedata-ui/slots';
import * as popover from '@zag-js/popover';
import { normalizeProps, useMachine } from '@zag-js/vue';
import { useColorPalette } from '../use-color-palette';
import { dataAttrBoolean } from '@kedata-software/toolkit-js';

const useSelectInput = (props: SelectInputProps, models: SelectInputModels) => {
  const id = useId();
  const mode = computed(() => props.mode ?? 'single');
  const colorPaletteClass = useColorPalette(() => props.colorPalette);

  const valueArr = computed(() => {
    const valueModel = models.value.value;

    if (
      mode.value === 'single' &&
      typeof valueModel === 'string' &&
      valueModel.length > 0
    ) {
      return [valueModel];
    }

    if (mode.value === 'single' && Array.isArray(valueModel)) {
      return valueModel;
    }

    if (mode.value === 'multiple' && Array.isArray(valueModel)) {
      return valueModel;
    }

    if (
      mode.value === 'multiple' &&
      typeof valueModel === 'string' &&
      valueModel.length > 0
    ) {
      return [valueModel];
    }

    return [];
  });

  const valueModel = computed({
    get: () => valueArr.value,
    set: (value) => {
      if (mode.value === 'single') {
        models.value.value = value[value.length - 1];
      }
      if (mode.value === 'multiple') {
        models.value.value = value;
      }

      if (props.closeOnSelect) {
        models.isOpen.value = false;
      }
    },
  });

  const isPlaceholderShown = computed(() => {
    return selectedOptions.value.length === 0;
  });

  const isOpen = computed(() => models.isOpen.value);

  const removeValue = (value: string) => {
    if (mode.value === 'single') {
      models.value.value = '';
    }
    if (mode.value === 'multiple') {
      models.value.value = valueArr.value.filter((item) => item !== value);
    }
  };

  const selectedOptions = computed(() => {
    if (props.options === undefined) {
      return [];
    }

    return props.options?.filter((option) => {
      return valueArr.value.includes(option.value);
    });
  });

  const service = useMachine(
    popover.machine,
    computed(() => {
      return {
        id,
        open: models.isOpen.value,
        onOpenChange: (details) => {
          models.isOpen.value = details.open;
        },
        onClose: () => {
          if (props.clearSearchTermOnClose) {
            models.searchTerm.value = '';
          }
        },
      };
    }),
  );

  const api = computed(() => popover.connect(service, normalizeProps));

  const slots = computed(() => {
    return selectInputSlots({
      withParts: props.withParts,
    });
  });

  const getRootProps = () => {
    return {
      ...api.value.getTriggerProps(),
      'data-open': dataAttrBoolean(models.isOpen.value),
      'data-has-placeholder': dataAttrBoolean(valueArr.value.length === 0),
      class: tw(colorPaletteClass.value, slots.value.root()),
    } as HTMLAttributes;
  };

  const getContentProps = () => {
    return api.value.getContentProps() as HTMLAttributes;
  };

  const getValueProps = () => {
    return {
      class: tw(slots.value.value()),
    };
  };

  const getPositionerProps = () => {
    const positionerApi = api.value.getPositionerProps();

    return {
      ...positionerApi,
      style: {
        ...(positionerApi.style as any),
        width: 'var(--reference-width)',
      },
      class: tw(slots.value.positioner()),
    } as HTMLAttributes;
  };

  const getInputWrapperProps = () => {
    return {
      class: tw(slots.value.inputWrapper()),
    } as HTMLAttributes;
  };

  const getIndicatorProps = () => {
    return {
      class: tw(slots.value.indicator()),
    } as SVGAttributes;
  };

  const getSelectPickerProps = () => {
    return {
      options: props.options,
    };
  };

  return {
    slots,
    isPlaceholderShown,
    selectedOptions,
    valueModel,
    isOpen,
    mode,

    removeValue,

    getRootProps,
    getContentProps,
    getValueProps,
    getPositionerProps,
    getInputWrapperProps,
    getIndicatorProps,
    getSelectPickerProps,
  };
};

export default useSelectInput;
