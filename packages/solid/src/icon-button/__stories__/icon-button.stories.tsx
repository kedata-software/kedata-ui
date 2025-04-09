import IconButton from '../icon-button';
import { Meta, StoryObj } from 'storybook-solidjs';
import { KiSearchSolid } from '@kedata-ui/solid-icons';

const Base: StoryObj<typeof IconButton> = {
  args: {
    colorPalette: 'primary',
    variant: 'solid',
    size: 'medium',
    'aria-label': 'Search',
  },
  render: (props) => {
    return (
      <IconButton {...props}>
        {(props) => <KiSearchSolid {...props} />}
      </IconButton>
    );
  },
};

const meta: Meta<typeof IconButton> = {
  title: 'Action/IconButton',
  argTypes: {
    'aria-label': {
      control: { type: 'text' },
      type: {
        name: 'string',
        required: true,
      },
    },
    colorPalette: {
      options: ['primary', 'success', 'danger'],
      control: { type: 'select' },
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    variant: {
      options: ['solid', 'outline', 'text'],
      control: { type: 'radio' },
      table: {
        type: {
          summary: "'solid' | 'outline' | 'text'",
        },
        defaultValue: { summary: 'solid' },
      },
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
      table: {
        type: {
          summary: "'small' | 'medium' | 'large'",
        },
        defaultValue: {
          summary: 'medium',
        },
      },
    },
    disabled: {
      control: { type: 'boolean' },
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    loading: {
      control: { type: 'boolean' },
      table: {
        defaultValue: { summary: 'false' },
      },
    },
  },
};

export { Base };
export default meta;
