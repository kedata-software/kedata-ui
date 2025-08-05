import { h } from 'vue';
import Switch from '../Switch.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

const Base: StoryObj<typeof Switch> = {
  args: {},
  render: (props) => ({
    setup: () => ({ props }),
    template: `
      <Switch v-bind="props">
        <template #default>Switch</template>
      </Switch>
    `,
    components: { Switch },
  }),
};

const meta: Meta<typeof Switch> = {
  title: 'Form/Switch',
  tags: ['autodocs'],
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
