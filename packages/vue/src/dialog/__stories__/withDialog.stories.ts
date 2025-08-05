import DialogBody from '../DialogBody.vue';
import DialogFooter from '../DialogFooter.vue';
import DialogHeader from '../DialogHeader.vue';
import DialogContent from '../DialogContent.vue';
import withDialog from '../withDialog';
import { Button } from '../../button';
import useDialogStore from '../useDialogStore';
import { defineComponent } from 'vue';
import type { Meta, StoryObj } from '@storybook/vue3';
import useDialogContext from '../useDialogContext';

const Template = withDialog(
  defineComponent({
    name: 'UserDialog',
    setup() {
      const dialogContext = useDialogContext();

      return {
        close: dialogContext.close,
      };
    },
    template: `
      <DialogContent class="w-full max-w-lg">
        <DialogHeader title="Dialog Title" />
        <DialogBody>
          <p>Dialog Content</p>
        </DialogBody>
        <DialogFooter>
          <Button variant="outline" @click="close">Cancel</Button>
          <Button>Submit</Button>
        </DialogFooter>
      </DialogContent>
    `,
    components: {
      DialogContent,
      DialogHeader,
      DialogBody,
      DialogFooter,
      Button,
    },
  }),
);

const meta = {
  title: 'Overlay/Dialog',
};

const Default: StoryObj = {
  render: () => ({
    setup() {
      const store = useDialogStore();

      return {
        store,
      };
    },
    template: `
      <div>
        <Button @click="store.open">Open Dialog</Button>
        <Template :store="store" />
      </div>
    `,
    components: {
      Button,
      Template,
    },
  }),
};

export { Default };
export default meta;
