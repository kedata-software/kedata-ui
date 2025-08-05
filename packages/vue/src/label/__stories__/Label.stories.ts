import type { Meta, StoryObj } from '@storybook/vue3';
import Label from '../Label.vue';

type Story = StoryObj<typeof meta>;

const meta: Meta<typeof Label> = {
  title: 'Form/Label',
  component: Label,
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
    required: {
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: 'undefined',
        },
      },
    },
    showAsterisk: {
      control: { type: 'boolean' },
      description:
        'If `true`, the asterisk will be shown. Make sure to set `required` prop to `true` if you want to show the asterisk.',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: 'true',
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
    components: { Label },
    setup() {
      console.log(args.required);
      return { args };
    },
    template: `
      <Label v-bind="args">
        Label
      </Label>
    `,
  }),
};

const Required: Story = {
  args: {
    required: true,
    showAsterisk: true,
  },
  render: (args) => ({
    components: { Label },
    setup() {
      return { args };
    },
    template: `
      <Label v-bind="args">
        Label
      </Label>
    `,
  }),
};

export { Default, Required };
export default meta;
