import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Tooltip from '../tooltip';

const Base: StoryObj = {
  render: () => (
    <div className="p-10">
      <Tooltip content={() => 'Hello!'}>
        <button>Hover me!</button>
      </Tooltip>
    </div>
  ),
};

const meta: Meta = {
  title: 'Overlay/Tooltip',
  component: Tooltip,
};

export default meta;
export { Base };
