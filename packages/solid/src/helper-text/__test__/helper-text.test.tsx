import { describe, it, expect } from 'vitest';
import { render } from '@solidjs/testing-library';
import HelperText from '../helper-text';

describe('HelperText', () => {
  it('Should render children', () => {
    const { getByText } = render(() => (
      <HelperText data-testid="helper">Hello</HelperText>
    ));

    expect(getByText('Hello')).toBeInTheDocument();
  });
});
