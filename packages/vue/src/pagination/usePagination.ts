import * as pagination from "@zag-js/pagination";
import { normalizeProps, useMachine } from "@zag-js/vue";
import type { PaginationModels, PaginationProps } from "./index.types";
import { computed, effect, type HTMLAttributes } from "vue";
import { useColorPalette } from "../use-color-palette";
import { paginationSlots, tw } from "@kedata-ui/slots";

const usePagination = (props: PaginationProps, models: PaginationModels) => {
  const colorPaletteClass = useColorPalette(() => props.colorPalette);

  const service = useMachine(
    pagination.machine,
    computed(() => ({
      count: props.count,
      initialPage: props.initialPage,
      page: models.page.value,
      pageSize: models.pageSize.value,
      onPageChange: (details) => {
        models.page.value = details.page;
        models.pageSize.value = details.pageSize;
      },
      onPageSizeChange: (details) => {
        models.pageSize.value = details.pageSize;
      },
    }))
  );

  const api = computed(() => pagination.connect(service, normalizeProps));

  const activeVariant = computed(() => props.activeVariant ?? "solid");
  const inactiveVariant = computed(() => props.inactiveVariant ?? "outline");
  const buttonSize = computed(() => props.size ?? "small");

  const slots = computed(() => {
    return paginationSlots({
      withParts: props.withParts,
      size: buttonSize.value,
    });
  });

  const getRootProps = () => {
    return {
      ...api.value.getRootProps(),
      class: tw(colorPaletteClass.value, slots.value.root()),
    } as HTMLAttributes;
  };

  const getPrevTriggerProps = () => {
    return {
      ...api.value.getPrevTriggerProps(),
      class: tw(
        slots.value.prevTrigger({
          size: buttonSize.value,
          variant: "solid",
        })
      ),
    } as HTMLAttributes;
  };

  const getNextTriggerProps = () => {
    return {
      ...api.value.getNextTriggerProps(),
      class: tw(
        slots.value.nextTrigger({
          size: buttonSize.value,
          variant: "solid",
        })
      ),
    } as HTMLAttributes;
  };

  const getEllipsisProps = (props: pagination.EllipsisProps) => {
    return {
      ...api.value.getEllipsisProps(props),
      class: tw(slots.value.ellipsis()),
    } as HTMLAttributes;
  };

  const getItemProps = (props: pagination.ItemProps) => {
    return {
      ...api.value.getItemProps(props),
      class: tw(slots.value.item()),
    } as HTMLAttributes;
  };

  const pages = computed(() => api.value.pages);

  return {
    slots,
    activeVariant,
    inactiveVariant,
    size: buttonSize,
    pages,

    getRootProps,
    getPrevTriggerProps,
    getNextTriggerProps,
    getEllipsisProps,
    getItemProps,
  };
};

export default usePagination;
