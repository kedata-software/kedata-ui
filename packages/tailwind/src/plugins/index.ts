import type { PluginCreator } from 'tailwindcss/types/config';
import hexRgb from 'hex-rgb';

const kedataPlugin: () => PluginCreator = () => {
  return ({ addBase, theme, addComponents, config }) => {
    const colors = theme('colors') ?? {};
    const vars: Record<string, string> = {};

    Object.entries(colors).forEach(([colorName, value]) => {
      const paletteVars: Record<string, string> = {};
      if (typeof value !== 'object') return;

      Object.entries(value).forEach(([colorKey, colorValue]) => {
        if (typeof colorValue !== 'string') return;

        const isHexColor = colorValue.startsWith('#');
        if (isHexColor) {
          const { red, green, blue } = hexRgb(colorValue);
          const rgbValue = `${red}, ${green}, ${blue}`;
          vars[`--tw-color-${colorName}-${colorKey.toLowerCase()}-rgb`] =
            rgbValue;
          paletteVars[`--tw-color-palette-${colorKey.toLowerCase()}-rgb`] =
            rgbValue;

          return;
        }

        const isRgbaColor = colorValue.startsWith('rgba');
        if (isRgbaColor) {
          let regexResult = colorValue.match(/\/\*.+\*\//g);
          if (!regexResult) return;

          let hexValue = regexResult[0]
            .replaceAll(/\s+/g, '')
            .replaceAll(/\/\*/g, '')
            .replaceAll(/\*\//g, '');

          const { red, green, blue } = hexRgb(hexValue);
          const rgbValue = `${red}, ${green}, ${blue}`;
          vars[`--tw-color-${colorName}-${colorKey.toLowerCase()}-rgb`] =
            rgbValue;
          paletteVars[`--tw-color-palette-${colorKey.toLowerCase()}-rgb`] =
            rgbValue;

          return;
        }
      });

      addBase({
        [`.color-palette-${colorName}`]: paletteVars,
      });
    });

    addBase({
      ':root': vars,
    });

    addComponents({
      '.text-headline-1': {
        fontSize: '1.75em',
        lineHeight: '1.285',
        fontWeight: '700',
        [`@media (min-width: ${config('theme.screens.lg')})`]: {
          fontSize: '4em',
          lineHeight: '1.1875',
        },
      },
      '.text-headline-2': {
        fontSize: '1.25em',
        lineHeight: '1.4',
        fontWeight: '700',
        [`@media (min-width: ${config('theme.screens.lg')})`]: {
          fontSize: '2.25em',
          lineHeight: '1.2222',
        },
      },
      '.text-headline-3': {
        fontSize: '1.125em',
        lineHeight: '1.3333',
        fontWeight: '700',
        [`@media (min-width: ${config('theme.screens.lg')})`]: {
          fontSize: '1.75em',
          lineHeight: '1.2857',
        },
      },
      '.text-headline-4': {
        fontSize: '1em',
        lineHeight: '1.25',
        fontWeight: '700',
        [`@media (min-width: ${config('theme.screens.lg')})`]: {
          fontSize: '1.25em',
          lineHeight: '1.4',
        },
      },
    });

    addComponents({
      '.visually-hidden': {
        border: '0',
        clip: 'rect(0 0 0 0)',
        height: '1px',
        margin: '-1px',
        overflow: 'hidden',
        padding: '0',
        position: 'absolute',
        width: '1px',
        whiteSpace: 'nowrap',
        wordWrap: 'normal',
      },
    });

    addComponents({
      '.separator-y': {
        height: '1px',
        width: '100%',
        backgroundColor: 'rgb(var(--tw-color-dark-300-rgb))',
      },
      '.separator-x': {
        height: '100%',
        width: '1px',
        backgroundColor: 'rgb(var(--tw-color-dark-300-rgb))',
      },
    });

    addComponents({
      '.flex-center': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
    });
  };
};

export default kedataPlugin;
