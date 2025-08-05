import { ref } from 'vue';
import Radio from '../Radio.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

const Base: StoryObj<typeof Radio> = {
  args: {
    name: 'radio',
  },
  render: () => ({
    setup: () => {
      const checked = ref(false);
      return { checked, value: '1', name: 'radio' };
    },
    template: `
      <Radio v-bind="props" v-model="checked" :value="value" :name="name">
        <template #label>Radio</template>
        <template #description>This is description</template>
      </Radio>
    `,
    components: { Radio },
  }),
};

const meta: Meta<typeof Radio> = {
  title: 'Form/Radio',
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
