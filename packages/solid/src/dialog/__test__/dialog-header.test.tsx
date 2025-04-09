import { fireEvent, render, renderHook } from '@solidjs/testing-library';
import DialogHeader from '../dialog-header';
import { expect } from 'vitest';
import createDialogStore from '../create-dialog-store';
import { DialogProvider } from '../dialog-context';

describe('DialogHeader', () => {
  it('should render title', () => {
    const { getByText } = render(() => <DialogHeader title="Dialog Header" />);
    expect(getByText('Dialog Header')).toBeInTheDocument();
  });

  it('Should close dialog', async () => {
    const onClose = vitest.fn();
    const { result } = renderHook(() => {
      const store = createDialogStore();
      store.close = onClose;
      return store;
    });

    const { container } = render(() => (
      <DialogProvider
        value={{
          ...result,
          position: 'bottom-center',
        }}
      >
        <DialogHeader title="Dialog Header" />
      </DialogProvider>
    ));

    const closeIcon = container.querySelector('.dialog-header__close-icon');
    expect(closeIcon).toBeInTheDocument();

    fireEvent.click(closeIcon!);

    expect(onClose).toHaveBeenCalled();
  });
});
