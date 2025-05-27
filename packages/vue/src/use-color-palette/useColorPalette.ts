import type { ColorPalette } from "@kedata-ui/slots";
import { computed, type ComputedGetter } from "vue";

const useColorPalette = (
  color: ComputedGetter<ColorPalette | undefined>,
  defaultColor: ColorPalette = "primary"
) => {
  return computed(() => colorPaletteClassNames[color() ?? defaultColor]);
};

const colorPaletteClassNames: Record<ColorPalette, string> = {
  primary: "color-palette-primary",
  success: "color-palette-success",
  danger: "color-palette-danger",
  dark: "color-palette-dark",
  neutral: "color-palette-neutral",
  info: "color-palette-info",
  warning: "color-palette-warning",
};

export default useColorPalette;
