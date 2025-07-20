import { h } from 'vue';
import ColorInput from '../ColorInput.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

const Base: StoryObj<typeof ColorInput> = {
  args: {
    colorPalette: 'primary',
  },
  render: (props) => ({
    setup() {
      return () => {
        return h(ColorInput, props);
      };
    },
  }),
};

const meta: Meta<typeof ColorInput> = {
  title: 'Form/ColorInput',
  argTypes: {
    colorPalette: {
      options: ['primary', 'success', 'danger'],
      control: { type: 'select' },
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
  },
};

export { Base };
export default meta;
