import { h } from 'vue';
import Switch from '../Switch.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

const Base: StoryObj<typeof Switch> = {
  args: {},
  render: (props) => ({
    setup: () => () => {
      return h(Switch, props, {
        default: () => 'Switch',
      });
    },
  }),
};

const meta: Meta<typeof Switch> = {
  title: 'Form/Switch',
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
      type: 'boolean',
    },
    modelValue: {
      control: { type: 'boolean' },
      type: 'boolean',
    },
    withParts: {
      control: 'boolean',
      type: 'boolean',
    },
    'onUpdate:modelValue': {
      action: 'onUpdate:modelValue',
    },
  },
};

export { Base };
export default meta;
