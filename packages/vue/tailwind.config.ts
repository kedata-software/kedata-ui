import { join } from 'path';
import type { Config } from 'tailwindcss';
import twAnimate from 'tailwindcss-animate';
import { kedataPlugin, colors, fontSize } from '@kedata-ui/tailwind';

const config: Config = {
  darkMode: ['variant', '.dark &:not(.light)'],
  content: [
    join(__dirname, 'src/**/*!(*.spec|*.test).{ts,tsx,vue,html}'),
    join(
      __dirname,
      '..',
      'slots',
      'src/**/*!(*.spec|*.test).{ts,tsx,vue,html}',
    ),
  ],
  theme: {
    extend: {
      colors,
      fontSize,
    },
  },
  plugins: [twAnimate, kedataPlugin()],
};

export default config;
