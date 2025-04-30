import colorPaletteClassNames from '../color-palette-class-names';
import type { ColorPalette } from '@kedata-ui/slots';

const useColorPalette = (
  color?: ColorPalette,
  defaultColor: ColorPalette = 'primary',
) => {
  return colorPaletteClassNames[color ?? defaultColor];
};

export default useColorPalette;
