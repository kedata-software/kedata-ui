import React from 'react';
import ErrorMessage from '../error-message';
import { Meta, StoryObj } from '@storybook/react';

const Default: StoryObj<typeof ErrorMessage> = {
  args: {
    colorPalette: 'danger',
    error: 'This is an error',
  },
  render: (props) => {
    return <ErrorMessage {...props} />;
  },
};

const meta: Meta<typeof ErrorMessage> = {
  title: 'Display/ErrorMessage',
  component: ErrorMessage,
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
