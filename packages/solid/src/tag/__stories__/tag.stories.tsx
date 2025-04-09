import Tag from '../tag';
import { Meta, StoryObj } from 'storybook-solidjs';

const Base: StoryObj<typeof Tag> = {
  args: {
    colorPalette: 'primary',
    variant: 'solid',
    closeable: false,
  },
  render: (props) => {
    return <Tag {...props}>Hello Tag</Tag>;
  },
};

const Closeable: StoryObj<typeof Tag> = {
  args: {
    colorPalette: 'primary',
    variant: 'solid',
    closeable: true,
  },
  render: (props) => {
    return <Tag {...props}>Hello Tag</Tag>;
  },
};

const meta: Meta<typeof Tag> = {
  title: 'Action/Tag',
  argTypes: {
    colorPalette: {
      options: ['primary', 'success', 'danger'],
      control: { type: 'select' },
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    variant: {
      options: ['subtle', 'solid', 'outline'],
      control: { type: 'select' },
      table: {
        defaultValue: { summary: 'solid' },
      },
    },
    closeable: {
      control: { type: 'boolean' },
      table: {
        defaultValue: { summary: 'false' },
      },
    },
  },
};

export { Base, Closeable };
export default meta;
