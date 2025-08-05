import Feedback from '../Feedback.vue';
import type { Meta, StoryObj } from '@storybook/vue3';
import { KiExclamationSolid } from '@kedata-ui/vue-icons';
import { h } from 'vue';

const Base: StoryObj<typeof Feedback> = {
  args: {
    title: 'Hello',
    message: 'This is a feedback component',
    colorPalette: 'danger',
  },
  render: (props) => ({
    components: { Feedback, KiExclamationSolid },
    setup() {
      return { props };
    },
    template: `
      <Feedback v-bind="props">
        <template #icon="props">
          <KiExclamationSolid v-bind="props" />
        </template>
        <template #title>
          {{ props.title }}
        </template>
        <template #message>
          {{ props.message }}
        </template>
      </Feedback>
    `,
  }),
};

const meta: Meta<typeof Feedback> = {
  title: 'Display/Feedback',
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: { type: 'text' },
      table: {
        type: {
          summary: 'React.ReactNode',
        },
        defaultValue: { summary: 'undefined' },
      },
    },
    colorPalette: {
      options: ['primary', 'success', 'danger'],
      control: { type: 'select' },
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    preset: {
      options: ['success', 'error', 'warning'],
      control: { type: 'select' },
      table: {
        defaultValue: { summary: 'undefined' },
      },
    },
  },
};

export { Base };
export default meta;
