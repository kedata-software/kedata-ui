import { ref } from 'vue';
import SelectInput from '../SelectInput.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

const Single: StoryObj<typeof SelectInput> = {
  args: {
    name: 'select-input',
    placeholder: 'Select your option',
    mode: 'single',
    options: [
      {
        label: 'Option 1',
        value: '1',
      },
      {
        label: 'Option 2',
        value: '2',
      },
    ],
  },
  render: (props) => ({
    setup: () => {
      const value = ref('');
      return { value, name: 'select-input', props, options: props.options };
    },
    template: `
      <SelectInput v-bind="props" v-model="value" :name="name" :options="options" />
    `,
    components: { SelectInput },
  }),
};

const Multiple: StoryObj<typeof SelectInput> = {
  args: {
    name: 'select-input',
    placeholder: 'Select your option',
    mode: 'multiple',
    options: [
      {
        label: 'Option 1',
        value: '1',
      },
      {
        label: 'Option 2',
        value: '2',
      },
    ],
  },
  render: (props) => ({
    setup: () => {
      const value = ref('');
      return { value, name: 'select-input', props, options: props.options };
    },
    template: `
      <SelectInput v-bind="props" v-model="value" :name="name" :options="options" />
    `,
    components: { SelectInput },
  }),
};

const meta: Meta<typeof SelectInput> = {
  title: 'Form/SelectInput',
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: { type: 'text' },
      type: 'string',
    },
    disabled: {
      control: { type: 'boolean' },
      type: 'boolean',
    },
    modelValue: {
      control: { type: 'text' },
      type: 'string',
    },
    'onUpdate:modelValue': {
      action: 'onUpdate:modelValue',
    },
    options: {
      control: { type: 'object' },
    },
    placeholder: {
      control: { type: 'text' },
      type: 'string',
    },
  },
};

export { Single, Multiple };
export default meta;
