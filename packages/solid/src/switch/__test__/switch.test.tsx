import { describe, it, expect } from 'vitest';
import { fireEvent, render, waitFor } from '@solidjs/testing-library';
import Switch from '../switch';
import type { SwitchRef } from '../index.types';

describe('Switch', () => {
  it('Should render', () => {
    const { getByRole } = render(() => <Switch />);
    expect(getByRole('switch')).toBeInTheDocument();
  });

  it('Should render label', () => {
    const { getByText } = render(() => <Switch label="Hello" />);
    expect(getByText('Hello')).toBeInTheDocument();
  });

  it('Should render checked attribute', () => {
    const { getByRole } = render(() => <Switch checked />);
    expect(getByRole('switch')).toHaveAttribute('aria-checked', 'true');
  });

  it('Should render disabled attribute', () => {
    const { getByRole } = render(() => <Switch disabled />);
    expect(getByRole('switch')).toHaveAttribute('data-disabled');
  });

  it('Should call onChange', async () => {
    const onChange = vitest.fn();
    const { getByRole } = render(() => <Switch onCheckedChange={onChange} />);

    fireEvent.click(getByRole('switch'));

    await waitFor(() => {
      expect(onChange).toBeCalled();
    });
  });

  it('Should focus button', async () => {
    let ref: SwitchRef | undefined;
    render(() => <Switch ref={ref} />);
    const focusSpy = vitest.spyOn(ref!, 'focus');

    ref?.focus();

    expect(focusSpy).toHaveBeenCalled();
  });

  it('Should blur button', async () => {
    let ref: SwitchRef | undefined;
    render(() => <Switch ref={ref} />);
    const blurSpy = vitest.spyOn(ref!, 'blur');

    ref?.blur();

    expect(blurSpy).toHaveBeenCalled();
  });
});
