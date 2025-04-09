import { StoryObj, Meta } from 'storybook-solidjs';
import ColorPicker from '../color-picker';

const meta: Meta<typeof ColorPicker> = {
  title: 'Picker/ColorPicker',
  component: ColorPicker,
  argTypes: {
    value: {
      description: 'The selected color',
      control: {
        type: 'text',
      },
      table: {
        defaultValue: { summary: '"#000000FF"' },
        type: { summary: 'string' },
      },
    },
    swatches: {
      description: 'The color swatches',
    },
    onRequestClose: {
      action: 'onRequestClose',
      table: {
        type: {
          summary: '() => void',
        },
      },
    },
    onValueChange: {
      action: 'onValueChange',
      table: {
        type: {
          summary: '(color: string) => void',
        },
      },
    },
    onValueChangeEnd: {
      action: 'onValueChangeEnd',
      table: {
        type: {
          summary: '(color: string) => void',
        },
      },
    },
  },
};

const Base: StoryObj<typeof ColorPicker> = {
  args: {
    swatches: ['#ff0000', '#00ff00', '#0000ff'],
  },
  render: (props) => <ColorPicker {...props} class="w-[300px]" />,
};

export { Base };
export default meta;
