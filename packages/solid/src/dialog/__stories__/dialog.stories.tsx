import { Meta, StoryObj } from 'storybook-solidjs';
import withDialog from '../with-dialog';
import DialogContent from '../dialog-content';
import DialogHeader from '../dialog-header';
import DialogBody from '../dialog-body';
import createDialogStore from '../create-dialog-store';
import { Button } from '../../button';
import DialogFooter from '../dialog-footer';
import { useDialogContext } from '../dialog-context';
import { TextInput } from '../../text-input';
import { SelectField } from '../../select-input';
import { FormField } from '../../form-field';
import { PasswordInput } from '../../password-input';

const MainDialog = () => {
  const dialogContext = useDialogContext();

  return (
    <DialogContent class="max-w-[500px] w-full">
      <DialogHeader title="Login" />
      <DialogBody class="gap-4 flex flex-col overflow-y-auto h-[1000px] max-h-[100vh] flex-1">
        <FormField label="Email">
          <TextInput placeholder="Please insert your email" autoFocus />
        </FormField>
        <FormField label="Password">
          <PasswordInput placeholder="Please insert your password" />
        </FormField>
        <FormField label="Gender">
          <SelectField
            placeholder="Select gender"
            options={[
              {
                label: 'Male',
                value: 'male',
              },
            ]}
          />
        </FormField>
      </DialogBody>
      <DialogFooter>
        <Button variant="outline" onClick={() => dialogContext?.close()}>
          Cancel
        </Button>
        <Button onClick={() => dialogContext?.close()}>Submit</Button>
      </DialogFooter>
    </DialogContent>
  );
};

const Dialog = withDialog(MainDialog);

const Base: StoryObj<typeof withDialog> = {
  render: () => {
    const dialogState = createDialogStore();
    return (
      <div>
        <button
          // ref={dialogState.triggerRef}
          onClick={() => {
            if (dialogState.isOpen()) {
              dialogState.close();
            } else {
              dialogState.open();
            }
          }}
        >
          Open
        </button>
        {/* <Dialog state={dialogState} /> */}

        {dialogState.isLoaded() && <Dialog store={dialogState} />}
      </div>
    );
  },
};

const meta: Meta = {
  title: 'Overlay/Dialog',
};

export { Base };
export default meta;
