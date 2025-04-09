import { createMemo, type Accessor } from 'solid-js';
import colorPaletteClassNames from '../color-palette-class-names';
import type { ColorPalette } from '@kedata-ui/slots';

const useColorPalette = (
  fn: Accessor<ColorPalette | undefined>,
  defaultColor: ColorPalette = 'primary',
) => {
  return createMemo(() => colorPaletteClassNames[fn() ?? defaultColor]);
};

export default useColorPalette;
