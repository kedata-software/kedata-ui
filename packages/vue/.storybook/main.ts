import type { StorybookConfig } from '@storybook/vue3-vite';
import { mergeConfig } from 'vite';
import { join } from 'path';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx,vue)'],
  addons: [
    // '@storybook/addon-links',
    '@storybook/addon-essentials',
    // '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  viteFinal: async (config) => {
    return mergeConfig(config, {
      resolve: {
        alias: {
          '@kedata-ui/slots': join(__dirname, '..', '..', 'slots', 'src'),
          '@kedata-ui/toolkit': join(__dirname, '..', '..', 'toolkit', 'src'),
          '@kedata-ui/vue-icons': join(
            __dirname,
            '..',
            '..',
            'vue-icons',
            'src',
          ),
        },
      },
    });
  },
};
export default config;
