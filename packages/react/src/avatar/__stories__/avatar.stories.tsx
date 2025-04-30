import Avatar from '../avatar';
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

const Base: StoryObj<typeof Avatar> = {
  args: {
    fallback: 'KD',
    src: 'https://i.pravatar.cc/300',
  },
  render: (props) => {
    return <Avatar {...props} />;
  },
};

const Fallback: StoryObj<typeof Avatar> = {
  args: {
    fallback: 'KD',
  },
  render: (props) => {
    return <Avatar {...props} />;
  },
};

const meta: Meta<typeof Avatar> = {
  title: 'Display/Avatar',
  argTypes: {
    src: {
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
      },
    },

    fallback: {
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
      },
    },
  },
};

export { Base, Fallback };
export default meta;
