import type { Meta, StoryObj } from '@storybook/vue3';
import PinInput from '../PinInput.vue';
import { h } from 'vue';

const Base: StoryObj<typeof PinInput> = {
  args: {},
  render: (props) => ({
    setup: () => () => {
      return h(PinInput, props);
    },
  }),
};

const meta: Meta<typeof PinInput> = {
  title: 'Form/PinInput',
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    invalid: { control: 'boolean' },
    readOnly: { control: 'boolean' },
    mask: { control: 'boolean' },
    count: { control: 'number' },
  },
};

export { Base };
export default meta;
