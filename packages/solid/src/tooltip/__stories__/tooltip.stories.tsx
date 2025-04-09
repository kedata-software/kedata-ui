import { Meta, StoryObj } from 'storybook-solidjs';
import Tooltip from '../tooltip';

const Base: StoryObj = {
  render: () => (
    <div class="p-10">
      <Tooltip content={() => 'Hello!'}>
        {(props) => <button {...props}>Hover me!</button>}
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
