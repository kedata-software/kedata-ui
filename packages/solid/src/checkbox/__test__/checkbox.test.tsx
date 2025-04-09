import { describe, it, expect, beforeAll } from 'vitest';
import { render } from '@solidjs/testing-library';
import Checkbox from '../checkbox';
import { CheckboxRef } from '../index.types';

describe('Checkbox', () => {
  beforeAll(() => {
    (window as any).PointerEvent = MouseEvent;
  });

  it('Should render', () => {
    const { getByRole } = render(() => <Checkbox />);
    expect(getByRole('checkbox')).toBeInTheDocument();
  });

  it('Should render label', () => {
    const { getByText } = render(() => <Checkbox>Hello</Checkbox>);
    expect(getByText('Hello')).toBeInTheDocument();
  });

  it('Should focus and blur ref', async () => {
    let ref: CheckboxRef | undefined;

    const { getByRole } = render(() => <Checkbox ref={ref} />);
    const checkboxEl = getByRole('checkbox');

    ref?.focus();
    expect(checkboxEl).toHaveFocus();

    ref?.blur();
    expect(checkboxEl).not.toHaveFocus();
  });
});
