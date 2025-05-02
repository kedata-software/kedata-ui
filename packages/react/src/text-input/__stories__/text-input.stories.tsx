import TextField from '../text-input';
import { KiSearchOutline } from '@kedata-ui/react-icons';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const Default: StoryObj<typeof TextField> = {
  args: {
    invalid: false,
    placeholder: 'Enter your name',
    disabled: false,
  },
  render: (props) => {
    return <TextField {...props} />;
  },
};

const StartIcon: StoryObj<typeof TextField> = {
  args: {
    invalid: false,
    startIcon: <KiSearchOutline />,
    placeholder: 'Enter search',
  },
  render: (props) => {
    return <TextField {...props} />;
  },
};

const StartAddon: StoryObj<typeof TextField> = {
  args: {
    invalid: false,
    startAddon: 'Rp',
    placeholder: 'Enter price',
  },
  render: (props) => {
    return <TextField {...props} />;
  },
};

const EndIcon: StoryObj<typeof TextField> = {
  args: {
    invalid: false,
    endIcon: <KiSearchOutline />,
    placeholder: 'Enter search',
  },
  render: (props) => {
    return <TextField {...props} />;
  },
};

const EndAddon: StoryObj<typeof TextField> = {
  args: {
    invalid: false,
    endAddon: ',00',
    placeholder: 'Enter price',
  },
  render: (props) => {
    return <TextField {...props} />;
  },
};

const meta: Meta<typeof TextField> = {
  title: 'Form/TextInput',
  argTypes: {
    invalid: {
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: { summary: 'false' },
      },
    },
    startAddon: {
      control: { type: 'text' },
      table: {
        type: {
          summary: 'React.ReactNode',
        },
        defaultValue: { summary: 'undefined' },
      },
    },
    startIcon: {
      control: { type: 'object' },
      table: {
        type: {
          summary: 'React.ReactNode',
        },
        defaultValue: { summary: 'undefined' },
      },
    },
    endIcon: {
      control: { type: 'object' },
      table: {
        type: {
          summary: 'React.ReactNode',
        },
        defaultValue: { summary: 'undefined' },
      },
    },
    endAddon: {
      control: { type: 'text' },
      table: {
        type: {
          summary: 'React.ReactNode',
        },
        defaultValue: { summary: 'undefined' },
      },
    },
    type: {
      options: ['text', 'password', 'email', 'number', 'tel', 'url', 'search'],
      table: {
        defaultValue: {
          summary: 'text',
        },
        type: {
          summary:
            "'text' | 'password' | 'email' | 'number' | 'tel' | 'url' | 'search'",
        },
      },
    },
    placeholder: {
      description: 'The placeholder of the input field.',
      control: {
        type: 'text',
      },
      table: {
        type: {
          summary: 'string',
        },
      },

      defaultValue: {
        summary: 'undefined',
      },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    onValueChange: {
      action: 'onValueChange',
    },
  },
};

export { Default, StartIcon, EndIcon, StartAddon, EndAddon };
export default meta;
