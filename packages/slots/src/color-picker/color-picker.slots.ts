import { tv } from 'tailwind-variants';
import colorPickerParts from './color-picker.parts';

const colorPickerSlots = tv(
  {
    slots: {
      root: 'flex flex-col gap-2 p-4 bg-white',

      area: 'h-[9rem] overflow-hidden rounded-md',
      areaBackground: 'h-full rounded-md',
      areaThumb: 'rounded-full size-3 border border-white border-2 cursor-move',

      eyeDropTrigger: 'size-7 border rounded-md',
      channelSliderContainer: '',
      channelSliderGroup: 'flex flex-col gap-2',
      channelSlider: 'h-3 w-full relative',
      channelSliderTrack: 'h-full w-full rounded-full',
      channelSliderThumb:
        'rounded-full size-4 border border-dark-100 border-[3px] -translate-x-1/2 -translate-y-1/2 cursor-move',

      channelInputContainer: 'flex gap-2',
      channelInput:
        'bg-dark-50 border border-dark-300 px-2 py-1 rounded-md focus:outline-none focus:border-primary',

      swatchContainer: 'flex flex-col gap-1',
      swatchLabel: 'text-sm',
      swatchGroup: 'flex gap-1',
      swatchTrigger: 'size-7 rounded-md bg-[--color]',
      swatch: '',
    },
    variants: {
      withParts: {
        true: colorPickerParts,
      },
    },
    defaultVariants: {
      withParts: true,
    },
  },
  { twMerge: false },
);

type ColorPickerSlots = typeof colorPickerSlots;
export type ColorPickerClassNames = Partial<ColorPickerSlots['slots']>;
export type ColorPickerIds = Partial<ColorPickerSlots['slots']>;

export default colorPickerSlots;
