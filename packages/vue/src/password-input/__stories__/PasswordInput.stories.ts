import type { Meta, StoryObj } from '@storybook/vue3';
import PasswordInput from '../PasswordInput.vue';
import { h } from 'vue';

const Base: StoryObj<typeof PasswordInput> = {
  render: (props) => ({
    setup: () => () => {
      return h(PasswordInput, props);
    },
  }),
};

const meta: Meta<typeof PasswordInput> = {
  title: 'Form/PasswordInput',
  argTypes: {},
};

export { Base };
export default meta;
