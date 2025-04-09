import { render } from '@solidjs/testing-library';
import DialogBody from '../dialog-body';
import { expect } from 'vitest';

describe('DialogBody', () => {
  it('should render children', () => {
    const { getByText } = render(() => <DialogBody>Dialog Body</DialogBody>);
    expect(getByText('Dialog Body')).toBeInTheDocument();
  });
});
