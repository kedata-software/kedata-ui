import { Preview } from '@storybook/html';
import '../src/styles/index.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^(on|pre).*' },
    controls: { expanded: true },
  },
};

export default preview;
