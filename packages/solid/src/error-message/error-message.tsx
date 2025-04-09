import { useBaseProps } from "../base-props";
import { useClassNames } from "../class-names";
import { useTwMerge } from "../tw-merge";
import { useColorPalette } from "../use-color-palette";
import { errorMessageSlots } from "@kedata-ui/slots/error-message";
import clsx from "clsx";
import type { ErrorMessageProps } from "./index.types";
import { createMemo, splitProps, type Component } from "solid-js";

const ErrorMessage: Component<ErrorMessageProps> = (inProps) => {
  const props = useBaseProps("ErroMessage", inProps);
  const classNames = useClassNames("ErrorMessage", inProps);
  const twMerge = useTwMerge();
  const colorPaletteClassName = useColorPalette(
    () => props.colorPalette,
    "danger",
  );

  const slots = createMemo(() => {
    return errorMessageSlots({ withParts: props.withParts });
  });

  const [, rootProps] = splitProps(props, omittedProps);

  const errorText = createMemo(() => getErrorText(props.error));

  return (
    <div
      {...rootProps}
      id={props.for ? `${props.for}__error-message` : props.id}
      class={twMerge(
        clsx(
          colorPaletteClassName(),
          slots().root(),
          classNames()?.root,
          props.class,
        ),
      )}
    >
      <div class={twMerge(clsx(slots().content(), classNames()?.content))}>
        {errorText()}
      </div>
    </div>
  );
};

const getErrorText = (
  error: string | null | undefined | { message?: string } | Error,
) => {
  if (error instanceof Error) {
    return error.message;
  }

  if (!error) {
    return undefined;
  }

  if (typeof error === "string") {
    return error;
  }

  return error.message;
};

export default ErrorMessage;

const omittedProps: Array<keyof ErrorMessageProps> = [
  "error",
  "colorPalette",
  "id",
  "for",
  "classNames",
  "withParts",
];
