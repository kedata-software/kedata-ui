import { computed, useId, type HTMLAttributes } from "vue";
import type { AvatarProps } from "./index.types";
import { normalizeProps, useMachine } from "@zag-js/vue";
import { avatarSlots } from "@kedata-ui/slots";
import * as avatar from "@zag-js/avatar";
import { useColorPalette } from "../use-color-palette";

const useAvatar = (props: AvatarProps) => {
  const slots = computed(() => avatarSlots({ withParts: props.withParts }));
  const service = useMachine(avatar.machine, { id: useId() });
  const api = avatar.connect(service, normalizeProps);
  const colorPaletteClassName = useColorPalette(() => props.colorPalette);

  const fallback = computed(() => props.fallback);
  const src = computed(() => props.src);

  const getRootProps = () => {
    return {
      ...api.getRootProps(),
      class: [colorPaletteClassName.value, slots.value.root()],
    } as HTMLAttributes;
  };

  const getFallbackProps = () => {
    return {
      ...api.getFallbackProps(),
      class: [slots.value.fallback()],
    } as HTMLAttributes;
  };

  const getImageProps = () => {
    return {
      ...api.getImageProps(),
      class: [slots.value.image()],
    } as HTMLAttributes;
  };

  return {
    fallback,
    src,

    getRootProps,
    getFallbackProps,
    getImageProps,
  };
};

export default useAvatar;
