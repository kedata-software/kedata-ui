import { computed, useId, type HTMLAttributes } from 'vue';
import type { SelectPickerModels, SelectPickerProps } from './index.types';
import { selectPickerSlots, tw } from '@kedata-ui/slots';
import * as select from '@zag-js/select';
import { normalizeProps, useMachine } from '@zag-js/vue';
import { dataAttrBoolean, defaultArray } from '@kedata-software/toolkit-js';

const useSelectPicker = (
  props: SelectPickerProps,
  models: SelectPickerModels,
) => {
  const id = useId();

  const baseCollection = computed(() => {
    return select.collection({
      items: defaultArray(props.options),
    });
  });

  const searchOptions = computed(() => {
    return baseCollection.value.items.filter((item) => {
      return item.label
        .toLowerCase()
        .includes(models.searchTerm.value.toLowerCase());
    });
  });

  const service = useMachine(
    select.machine,
    computed(() => {
      return {
        id,
        open: true,
        multiple: true,
        value: models.value.value,
        collection: baseCollection.value,
        onValueChange: (details) => {
          models.value.value = details.value;
        },
      };
    }),
  );

  const api = computed(() => select.connect(service, normalizeProps));

  const slots = computed(() => {
    return selectPickerSlots();
  });

  const getRootProps = () => {
    const contentApi = api.value.getContentProps();

    return {
      ...api.value.getContentProps(),
      'data-with-search': dataAttrBoolean(props.withSearch),
      'data-part': undefined,
      class: tw(slots.value.root(), props.class),
      onKeydown: (e: any) => {
        // Make sure search input can type space since the space code used for select an item
        if (e.code === 'Space') {
          return;
        }
        // @ts-ignore
        contentApi.onKeydown?.(e);
      },
    } as HTMLAttributes;
  };

  const getItemProps = (params: select.ItemProps) => {
    const itemApi = api.value.getItemProps(params);
    return {
      ...itemApi,
      'data-checked': dataAttrBoolean(itemApi['aria-selected']),
      class: tw(slots.value.item()),
    } as HTMLAttributes;
  };

  const getItemTextProps = (params: select.ItemProps) => {
    return {
      ...api.value.getItemTextProps(params),
      class: tw(slots.value.itemText()),
    };
  };

  const getItemGroupProps = (params: select.ItemGroupProps) => {
    return {
      ...api.value.getItemGroupProps(params),
      class: tw(slots.value.itemGroup()),
    };
  };

  const getItemGroupLabelProps = (params: select.ItemGroupLabelProps) => {
    return {
      ...api.value.getItemGroupLabelProps(params),
      class: tw(slots.value.itemGroupLabel()),
    };
  };

  const getSearchInputProps = () => {
    return {
      placeholder: props.searchPlaceholder ?? 'Search here',
      class: tw(slots.value.SearchInput()),
      classes: {
        inputWrapper: 'border-0 border-b rounded-b-none',
      },
    };
  };

  return {
    slots,
    searchOptions,

    getRootProps,
    getItemProps,
    getItemTextProps,
    getItemGroupProps,
    getItemGroupLabelProps,
    getSearchInputProps,
  };
};

export default useSelectPicker;
