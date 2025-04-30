import { StorybookConfig } from '@storybook/react-vite';

import { mergeConfig } from 'vite';
import { join } from 'path';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: ['@storybook/addon-essentials'],
  framework: '@storybook/react-vite',

  viteFinal: async (config) => {
    return mergeConfig(config, {
      resolve: {
        alias: {
          '@kedata-ui/slots': join(__dirname, '..', '..', 'slots', 'src'),
          '@kedata-ui/toolkit': join(__dirname, '..', '..', 'toolkit', 'src'),
          '@kedata-ui/react-icons': join(
            __dirname,
            '..',
            '..',
            'react-icons',
            'src',
          ),
        },
      },
    });
  },
};

export default config;

// To customize your Vite configuration you can use the viteFinal field.
// Check https://storybook.js.org/docs/react/builders/vite#configuration
// and https://nx.dev/recipes/storybook/custom-builder-configs
