import { h } from 'vue';
import ErrorMessage from '../ErrorMessage.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

const Default: StoryObj<typeof ErrorMessage> = {
  args: {
    colorPalette: 'danger',
  },
  render: (props) => ({
    components: { ErrorMessage },
    setup() {
      return { props };
    },
    template: `
      <ErrorMessage v-bind="props">
        This is an error message
      </ErrorMessage>
    `,
  }),
};

const meta: Meta<typeof ErrorMessage> = {
  title: 'Display/ErrorMessage',
  component: ErrorMessage,
  tags: ['autodocs'],
  argTypes: {
    colorPalette: {
      options: ['primary', 'success', 'danger'],
      control: { type: 'select' },
      table: {
        defaultValue: { summary: 'danger' },
      },
    },
  },
};

export { Default };
export default meta;
