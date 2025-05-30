import type { StoryObj, Meta } from '@storybook/vue3';
import ColorPicker from '../ColorPicker.vue';
import { h } from 'vue';

const meta: Meta<typeof ColorPicker> = {
  title: 'Picker/ColorPicker',
  component: ColorPicker,
  argTypes: {
    modelValue: {
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
    // onRequestClose: {
    //   action: 'onRequestClose',
    //   table: {
    //     type: {
    //       summary: '() => void',
    //     },
    //   },
    // },
    'onUpdate:modelValue': {
      action: 'onValueChange',
      table: {
        type: {
          summary: '(color: string) => void',
        },
      },
    },
    // onValueChangeEnd: {
    //   action: 'onValueChangeEnd',
    //   table: {
    //     type: {
    //       summary: '(color: string) => void',
    //     },
    //   },
    // },
  },
};

const Base: StoryObj<typeof ColorPicker> = {
  args: {
    swatches: ['#ff0000', '#00ff00', '#0000ff'],
    class: 'w-[300px]',
  },
  render: (props) => ({
    setup() {
      return () => h(ColorPicker, props);
    },
  }),
};

export { Base };
export default meta;
