import { describe, expect, it } from 'vitest';
import { render } from '@solidjs/testing-library';
import PinInput from '../pin-input';

describe('PinInput', () => {
  it('renders with default props', () => {
    const { container } = render(() => <PinInput />);
    const inputs = container.querySelectorAll('input');
    expect(inputs).toHaveLength(6); // Default count is 6
  });

  it('renders with custom count', () => {
    const { container } = render(() => <PinInput count={4} />);
    const inputs = container.querySelectorAll('input');
    expect(inputs).toHaveLength(4);
  });

  it('applies mask when specified', () => {
    const { container } = render(() => <PinInput mask={true} />);
    const inputs = container.querySelectorAll('input');
    expect(inputs[0]).toHaveAttribute('type', 'password');
  });

  it('handles disabled state', () => {
    const { container } = render(() => <PinInput disabled={true} />);
    const inputs = container.querySelectorAll('input');
    inputs.forEach((input) => {
      expect(input).toBeDisabled();
      expect(input).toHaveAttribute('data-disabled', '');
    });
  });

  it('handles invalid state', () => {
    const { container } = render(() => <PinInput invalid={true} />);
    const inputs = container.querySelectorAll('input');
    inputs.forEach((input) => {
      expect(input).toHaveAttribute('data-invalid', '');
    });
  });

  it('handles readonly state', () => {
    const { container } = render(() => <PinInput readOnly={true} />);
    const inputs = container.querySelectorAll('input');
    inputs.forEach((input) => {
      expect(input).toHaveAttribute('readonly');
      expect(input).toHaveAttribute('data-read-only', '');
    });
  });

  it('uses correct inputmode', () => {
    const { container } = render(() => <PinInput inputmode="text" />);
    const inputs = container.querySelectorAll('input');
    inputs.forEach((input) => {
      expect(input).toHaveAttribute('inputmode', 'text');
    });
  });

  it('applies custom class names', () => {
    const customClass = 'custom-pin-input';
    const { container } = render(() => <PinInput class={customClass} />);
    const rootElement = container.firstChild;
    expect(rootElement).toHaveClass(customClass);
  });

  it('respects initial value', () => {
    const initialValue = ['1', '2', '3', '4', '5', '6'];
    const { container } = render(() => (
      <PinInput initialValue={initialValue} />
    ));
    const inputs = container.querySelectorAll('input');
    inputs.forEach((input, index) => {
      expect(input).toHaveValue(initialValue[index]);
    });
  });
});
