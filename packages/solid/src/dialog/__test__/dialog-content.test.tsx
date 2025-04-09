import { render } from '@solidjs/testing-library';
import DialogContent from '../dialog-content';
import { expect } from 'vitest';

describe('DialogContent', () => {
  it('should render children', () => {
    const { getByText } = render(() => (
      <DialogContent>Dialog Content</DialogContent>
    ));
    expect(getByText('Dialog Content')).toBeInTheDocument();
  });
});
