import type { Meta, StoryObj } from '@storybook/vue3';
import HelperText from '../HelperText.vue';

type Story = StoryObj<typeof meta>;

const meta: Meta<typeof HelperText> = {
  title: 'Form/HelperText',
  component: HelperText,
  argTypes: {
    class: {
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'undefined',
        },
      },
    },
    withParts: {
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: 'true',
        },
      },
    },
  },
  tags: ['autodocs'],
};

const Default: Story = {
  args: {},
  render: (args) => ({
    components: { HelperText },
    setup() {
      return { args };
    },
    template: `
      <HelperText v-bind="args">
        This is helper text
      </HelperText>
    `,
  }),
};

export { Default };
export default meta;
