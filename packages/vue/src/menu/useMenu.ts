import { useMachine, normalizeProps, type PropTypes } from '@zag-js/vue';
import * as menu from '@zag-js/menu';
import type { MenuItemOption, MenuModels, MenuProps } from './index.types';
import { computed, effect, onMounted, provide, useId } from 'vue';
import { menuSlots, tw } from '@kedata-ui/slots';
import clsx from 'clsx';
import MenuContextKey from './MenuContext';

const useMenu = (props: MenuProps, models: MenuModels) => {
  const id = useId();

  const service = useMachine(
    menu.machine,
    computed(() => {
      return {
        id: id,
        open: models.isOpen.value,
        onOpenChange: (value) => {
          models.isOpen.value = value.open;
        },
        onSelect: (details) => {
          models.isOpen.value = false;
          props.mapValueSelect?.[details.value]?.(details.value);
        },
        positioning: {
          placement: 'bottom-start' as const,
        },
      };
    }),
  );

  const options = computed(() => {
    return props.options ?? [];
  });

  const menuApi = computed(() => menu.connect(service, normalizeProps));

  const childServices = computed(() => {
    return options.value
      .map((option) => {
        if (option.type !== 'item' || !option.options) {
          return undefined;
        }

        return useMachine(menu.machine, {
          id: option.value,
          onSelect: (details) => {
            models.isOpen.value = false;
            props.mapValueSelect?.[details.value]?.(details.value);
          },
        });
      })
      .filter((item) => !!item);
  });

  const childApis = computed(() => {
    return childServices.value.map((service) => {
      return menu.connect(service, normalizeProps);
    });
  });

  onMounted(() => {
    childServices.value.forEach((service) => {
      menuApi.value.setChild(service);
    });
    childApis.value.forEach((api) => {
      api.setParent(service);
    });
  });

  const slots = computed(() => {
    return menuSlots({
      withParts: props.withParts,
      darkable: props.darkable,
    });
  });

  provide(MenuContextKey, {
    menuApi,
    service,
    slots,
    mapValueSelect: props.mapValueSelect,
  });

  const getTriggerProps = () => {
    return {
      ...menuApi.value.getTriggerProps(),
      'data-expanded': models.isOpen.value,
    };
  };

  const getContentProps = () => {
    return {
      ...menuApi.value.getContentProps(),
      hidden: false,
      class: tw(slots.value.content()),
    };
  };

  const getPositionerProps = () => {
    return {
      ...menuApi.value.getPositionerProps(),
      class: tw(slots.value.positioner(), '!z-10'),
    };
  };

  const getSeparatorProps = () => {
    return {
      ...menuApi.value.getSeparatorProps(),
      class: tw(slots.value.separator()),
    };
  };

  const getTriggerItemProps = (api: any) => {
    return {
      ...menuApi.value.getTriggerItemProps(api),
      class: tw(slots.value.item()),
    };
  };

  const getItemProps = (params: menu.ItemProps) => {
    return {
      ...menuApi.value.getItemProps(params),
      class: tw(clsx(slots.value.item())),
    };
  };

  const getItemStartIconProps = (params: MenuItemOption) => {
    return {
      'data-color-palette': params.colorPalette,
      class: tw(clsx(slots.value.itemStartIcon(), params?.className)),
    };
  };

  return {
    options,
    childApis,
    getTriggerProps,
    getContentProps,
    getItemProps,
    getItemStartIconProps,
    getSeparatorProps,
    getPositionerProps,

    getTriggerItemProps,
  };
};

export default useMenu;
