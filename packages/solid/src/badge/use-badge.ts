import { useBaseProps } from "../base-props";
import { useClassNames } from "../class-names";
import { useTwMerge } from "../tw-merge";
import { badgeSlots } from "@kedata-ui/slots/badge";
import clsx from "clsx";
import {
  createMemo,
  mergeProps,
  type ComponentProps,
  type ValidComponent,
} from "solid-js";
import type { BadgeProps } from "./index.types";
import useColorPalette from "../use-color-palette";

const defaultBadgeProps: BadgeProps = {
  variant: "subtle",
};

const useBadge = (inProps: BadgeProps) => {
  const props = useBaseProps("Badge", inProps, defaultBadgeProps);
  const classNames = useClassNames("Badge", props);
  const colorPaletteClassName = useColorPalette(() => props.colorPalette);
  const twMerge = useTwMerge();

  const slots = createMemo(() => {
    return badgeSlots({
      withParts: props.withParts,
      variant: props.variant,
    });
  });

  const dataAttrs = createMemo(() => ({
    "data-variant": props.variant,
  }));

  const getRootProps = <T extends ValidComponent = "div">() => {
    return mergeProps(
      () => dataAttrs(),
      () => ({
        class: twMerge(
          clsx(
            slots().root(),
            colorPaletteClassName(),
            props.class,
            classNames()?.root,
          ),
        ),
      }),
    ) as ComponentProps<T>;
  };

  return {
    children: props.children,

    getRootProps,
  };
};

export default useBadge;
