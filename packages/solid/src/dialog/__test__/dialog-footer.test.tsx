import { render } from '@solidjs/testing-library';
import DialogFooter from '../dialog-footer';
import { expect } from 'vitest';

describe('DialogFooter', () => {
  it('should render children', () => {
    const { getByText } = render(() => (
      <DialogFooter>Dialog Footer</DialogFooter>
    ));
    expect(getByText('Dialog Footer')).toBeInTheDocument();
  });
});
