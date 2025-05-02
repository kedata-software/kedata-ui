import React from 'react';
import Feedback from '../feedback';
import { Meta, StoryObj } from '@storybook/react';
import { KiExclamationSolid } from '@kedata-ui/react-icons';

const Base: StoryObj<typeof Feedback> = {
  args: {
    title: 'Hello',
    message: 'This is a feedback component',
    colorPalette: 'danger',
    icon: <KiExclamationSolid />,
  },
  render: (props) => {
    return <Feedback {...props} />;
  },
};

const meta: Meta<typeof Feedback> = {
  title: 'Display/Feedback',
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
