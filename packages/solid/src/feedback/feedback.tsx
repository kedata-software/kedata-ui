import { FeedbackProps } from "./index.types";
import { useBaseProps } from "../base-props";
import { useClassNames } from "../class-names";
import { useTwMerge } from "../tw-merge";
import { useColorPalette } from "../use-color-palette";
import { feedbackSlots } from "@kedata-ui/slots/feedback";
import clsx from "clsx";
import { createMemo, splitProps, type Component } from "solid-js";

const Feedback: Component<FeedbackProps> = (inProps) => {
  const props = useBaseProps("Feedback", inProps, {
    colorPalette: "danger",
  });
  const classNames = useClassNames("Feedback", inProps);
  const colorPaletteClassName = useColorPalette(() => props.colorPalette);

  const twMerge = useTwMerge();

  const slots = createMemo(() => feedbackSlots({ withParts: props.withParts }));

  const [, rootProps] = splitProps(props, omittedProps);

  return (
    <div
      {...rootProps}
      class={twMerge(
        clsx(
          colorPaletteClassName(),
          slots().root(),
          classNames()?.root,
          props.class,
        ),
      )}
    >
      {props.icon && (
        <props.icon class={twMerge(clsx(slots().icon(), classNames()?.icon))} />
      )}

      <div class={twMerge(clsx(slots().title(), classNames()?.title))}>
        {props.title}
      </div>

      {props.message && (
        <p class={twMerge(clsx(slots().message(), classNames()?.message))}>
          {props.message}
        </p>
      )}
    </div>
  );
};

export default Feedback;

const omittedProps: Array<keyof FeedbackProps> = [
  "withParts",
  "icon",
  "title",
  "message",
  "colorPalette",
  "preset",
  "classNames",
];
