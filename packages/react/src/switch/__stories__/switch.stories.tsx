import React from 'react';
import Switch from '../switch';
import { Meta, StoryObj } from '@storybook/react';

const Base: StoryObj<typeof Switch> = {
  args: {
    title: 'Switch',
    label: 'Switch',
  },
  render: (props) => {
    return <Switch {...props} />;
  },
};

const meta: Meta<typeof Switch> = {
  title: 'Form/Switch',
  argTypes: {
    title: {
      type: {
        required: true,
        name: 'string',
      },
      control: { type: 'text' },
      table: {
        defaultValue: { summary: 'string' },
      },
    },
    disabled: {
      control: { type: 'boolean' },
      type: 'boolean',
    },
    checked: {
      control: { type: 'boolean' },
      type: 'boolean',
    },
    initialChecked: {
      control: { type: 'boolean' },
      type: 'boolean',
    },
    withParts: {
      control: 'boolean',
      type: 'boolean',
    },
    label: {
      control: {
        type: 'text',
      },
      table: {
        type: {
          summary: 'JSX.Element',
        },
        defaultValue: {
          summary: 'undefined',
        },
      },
    },
    onCheckedChange: {
      action: 'onCheckedChange',
    },
  },
};

export { Base };
export default meta;
