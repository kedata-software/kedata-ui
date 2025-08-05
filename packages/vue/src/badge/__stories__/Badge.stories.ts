import Badge from '../Badge.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<typeof Badge> = {
  title: 'Display/Badge',
  tags: ['autodocs'],
  args: {
    variant: 'subtle',
  },
  argTypes: {
    variant: {
      options: ['subtle'],
      control: {
        type: 'radio',
      },
    },
    withParts: {
      control: {
        type: 'boolean',
      },
    },
  },
  component: Badge,
};

const Base: StoryObj<typeof Badge> = {
  args: {},
  render: () => ({
    components: { Badge },
    template: '<Badge>Badge</Badge>',
  }),
};

export { Base };
export default meta;
