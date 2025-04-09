import { useDialogContext } from "./dialog-context";
import { useBaseProps } from "../base-props";
import { useClassNames } from "../class-names";
import { useTwMerge } from "../tw-merge";
import { dialogContentSlots } from "@kedata-ui/slots/dialog-content";
import clsx from "clsx";
import type { DialogContentProps } from "./index.types";
import {
  createMemo,
  splitProps,
  type ComponentProps,
  type ValidComponent,
} from "solid-js";

const useDialogContent = (inProps: DialogContentProps) => {
  const props = useBaseProps("DialogContent", inProps);
  const classNames = useClassNames("DialogContent", inProps);
  const twMerge = useTwMerge();
  const dialogContext = useDialogContext();

  const slots = createMemo(() => {
    return dialogContentSlots({
      withParts: props.withParts,
    });
  });

  const [, rootProps] = splitProps(props, omittedProps);

  const getRootProps = <T extends ValidComponent = "div">(
    className?: string,
  ) => {
    return {
      ...rootProps,
      "data-position": dialogContext?.position ?? "top-center",
      class: twMerge(
        clsx(slots().root(), classNames()?.root, props.class, className),
      ),
    } as ComponentProps<T>;
  };

  return {
    getRootProps,
  };
};

export default useDialogContent;

const omittedProps: Array<keyof DialogContentProps> = [
  "withParts",
  "classNames",
];
