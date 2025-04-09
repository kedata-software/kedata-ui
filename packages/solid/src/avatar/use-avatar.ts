import { useBaseProps } from "../base-props";
import { useClassNames } from "../class-names";
import { useTwMerge } from "../tw-merge";
import { useColorPalette } from "../use-color-palette";
import { avatarSlots } from "@kedata-ui/slots/avatar";
import * as avatar from "@zag-js/avatar";
import { normalizeProps, useMachine } from "@zag-js/solid";
import clsx from "clsx";
import {
  createMemo,
  mergeProps,
  splitProps,
  type ComponentProps,
  type ValidComponent,
} from "solid-js";
import type { AvatarProps } from "./index.types";
import type { PropsGetterParams } from "../types";

const useAvatar = (inProps: AvatarProps) => {
  const props = useBaseProps("Avatar", inProps);
  const classNames = useClassNames("Avatar", inProps);
  const twMerge = useTwMerge();
  const colorPaletteClassName = useColorPalette(() => props.colorPalette);

  const slots = createMemo(() => {
    return avatarSlots({
      withParts: props.withParts,
    });
  });

  const service = useMachine(avatar.machine, {
    get id() {
      return props.id;
    },
  });

  const avatarApi = createMemo(() => avatar.connect(service, normalizeProps));

  const [, rootProps] = splitProps(props, omittedProps);

  const getRootProps = <T extends ValidComponent = "div">(
    params?: PropsGetterParams,
  ) => {
    return mergeProps(
      () => avatarApi().getRootProps(),
      () => rootProps,
      () => ({
        class: twMerge(
          clsx(
            colorPaletteClassName(),
            slots().root(),
            props.class,
            classNames()?.root,
            params?.className,
          ),
        ),
      }),
    ) as ComponentProps<T>;
  };

  const getFallbackProps = <T extends ValidComponent = "span">(
    params?: PropsGetterParams,
  ) => {
    return mergeProps(
      () => avatarApi().getFallbackProps(),
      () => ({
        class: twMerge(
          clsx(slots().fallback(), classNames()?.fallback, params?.className),
        ),
      }),
    ) as ComponentProps<T>;
  };

  const getImageProps = <T extends ValidComponent = "img">(
    params?: PropsGetterParams,
  ) => {
    return mergeProps(
      () => avatarApi().getImageProps(),
      () => ({
        get src() {
          return props.src;
        },
        get alt() {
          return props.alt;
        },
      }),
      () => ({
        class: twMerge(
          clsx(slots().image(), classNames()?.image, params?.className),
        ),
      }),
    ) as ComponentProps<T>;
  };

  return {
    get fallback() {
      return props.fallback;
    },
    get src() {
      return props.src;
    },

    getRootProps,
    getFallbackProps,
    getImageProps,
  };
};

export default useAvatar;

const omittedProps: Array<keyof Omit<AvatarProps, "ref">> = [
  "withParts",
  "alt",
  "src",
  "fallback",
  "classNames",
  "ids",
  "colorPalette",
];
