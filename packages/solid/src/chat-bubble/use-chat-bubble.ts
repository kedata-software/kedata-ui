import { useBaseProps } from "../base-props";
import { useClassNames } from "../class-names";
import { useTwMerge } from "../tw-merge";
import { chatBubbleSlots } from "@kedata-ui/slots/chat-bubble";
import clsx from "clsx";
import type { ChatBubbleProps } from "./index.types";
import type { PropsGetterParams } from "../types";
import {
  createMemo,
  splitProps,
  type ComponentProps,
  type ValidComponent,
} from "solid-js";

const defaultChatBubbleProps: ChatBubbleProps = {
  variant: "question",
};

const useChatBubble = (inProps: ChatBubbleProps) => {
  const props = useBaseProps("ChatBubble", inProps, defaultChatBubbleProps);
  const classNames = useClassNames("ChatBubble", props);
  const twMerge = useTwMerge();
  const [, rootProps] = splitProps(props, omittedProps);

  const slots = createMemo(() => {
    return chatBubbleSlots({
      withParts: props.withParts,
    });
  });

  const isFooterVisible = !!props.time;

  const baseDataAttrs = createMemo(() => ({
    "data-variant": props.variant,
  }));

  const getRootProps = <T extends ValidComponent = "div">(
    params: PropsGetterParams = {},
  ) => {
    return {
      ...baseDataAttrs(),
      ...rootProps,
      class: twMerge(
        clsx(slots().root(), classNames()?.root, props.class, params.className),
      ),
    } as ComponentProps<T>;
  };

  const getBubbleProps = (params: PropsGetterParams = {}) => {
    return {
      ...baseDataAttrs(),
      class: twMerge(
        clsx(slots().bubble(), classNames()?.bubble, params.className),
      ),
      children: props.children,
    };
  };

  const getTimeProps = (params: PropsGetterParams = {}) => {
    return {
      ...baseDataAttrs(),
      class: twMerge(
        clsx(slots().time(), classNames()?.time, params.className),
      ),
    };
  };

  const getFooterProps = (params: PropsGetterParams = {}) => {
    return {
      ...baseDataAttrs(),
      class: twMerge(
        clsx(slots().footer(), classNames()?.footer, params.className),
      ),
    };
  };

  return {
    time: props.time,
    variant: props.variant,
    isFooterVisible,

    getRootProps,
    getBubbleProps,
    getTimeProps,
    getFooterProps,
  };
};

export default useChatBubble;

const omittedProps: Array<keyof Omit<ChatBubbleProps, "ref">> = [
  "variant",
  "time",
  "classNames",
  "role",
];
