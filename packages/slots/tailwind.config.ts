import { join } from 'path';
import type { Config } from 'tailwindcss';
import twAnimate from 'tailwindcss-animate';
import { kedataPlugin, colors, fontSize } from '@kedata-ui/tailwind';

const config: Config = {
  content: [
    join(__dirname, 'src/**/*!(*.stories|*.spec|*.test).{ts,tsx,html}'),
    join(__dirname, 'src/**/*.{ts,tsx,html}'),
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
