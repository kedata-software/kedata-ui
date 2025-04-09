import { describe, it, expect } from 'vitest';
import { render } from '@solidjs/testing-library';
import Label from '../label';

describe('Label', () => {
  it('Should render children', () => {
    const { getByText } = render(() => (
      <Label data-testid="field-label">Label</Label>
    ));
    expect(getByText('Label')).toBeInTheDocument();
  });

  it('Should render asterisk', () => {
    const { container } = render(() => (
      <Label
        data-testid="field-label"
        required
        showAsterisk
        aria-required
        classNames={{
          asterisk: 'asterisk',
        }}
      >
        Label
      </Label>
    ));

    const asteriskEl = container.querySelector('.label__asterisk');
    expect(asteriskEl).toBeInTheDocument();
    expect(asteriskEl).toHaveClass('asterisk');
  });
});
