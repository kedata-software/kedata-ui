import { h } from 'vue';
import Checkbox from '../Checkbox.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

const Base: StoryObj<typeof Checkbox> = {
  args: {
    colorPalette: 'primary',
  },
  render: (props) => ({
    setup() {
      return () => {
        return h(Checkbox, props, {
          default: () => 'Checkbox',
        });
      };
    },
  }),
};

const meta: Meta<typeof Checkbox> = {
  title: 'Form/Checkbox',
  argTypes: {
    colorPalette: {
      options: ['primary', 'success', 'danger'],
      control: { type: 'select' },
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    disabled: {
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    modelValue: {
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    indeterminate: {
      description: 'If true, the checkbox will be indeterminate',
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    'onUpdate:modelValue': {
      action: 'onCheckedChange',
    },
  },
};

export { Base };
export default meta;
