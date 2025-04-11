import { describe, expect, it } from 'vitest';
import { render, screen, fireEvent } from '@solidjs/testing-library';
import Radio from '../radio';

describe('Radio Component', () => {
  it('renders radio with label', () => {
    render(() => <Radio label="Test Radio" />);
    expect(screen.getByLabelText('Test Radio')).toBeInTheDocument();
  });

  it('renders radio with description', () => {
    render(() => (
      <Radio label="Test Radio" description="This is a description" />
    ));
    expect(screen.getByText('This is a description')).toBeInTheDocument();
  });

  it('handles checked state change', () => {
    const onCheckedChange = vi.fn();
    render(() => (
      <Radio label="Test Radio" onCheckedChange={onCheckedChange} />
    ));

    const radio = screen.getByRole('radio');
    fireEvent.click(radio);
    expect(onCheckedChange).toHaveBeenCalledWith(true);
  });

  it('respects disabled state', () => {
    render(() => <Radio label="Test Radio" disabled />);
    const radio = screen.getByRole('radio');
    expect(radio).toBeDisabled();
    expect(radio).toHaveAttribute('data-disabled', '');
  });

  it('respects readonly state', () => {
    const onCheckedChange = vi.fn();
    render(() => (
      <Radio label="Test Radio" readOnly onCheckedChange={onCheckedChange} />
    ));

    const radio = screen.getByRole('radio');
    fireEvent.click(radio);
    expect(onCheckedChange).not.toHaveBeenCalled();
    expect(radio).toHaveAttribute('data-read-only', '');
  });

  it('shows invalid state', () => {
    render(() => <Radio label="Test Radio" invalid />);
    const radio = screen.getByRole('radio');
    expect(radio).toHaveAttribute('data-invalid', '');
  });

  it('handles controlled checked state', () => {
    const onCheckedChange = vi.fn();
    render(() => (
      <Radio
        label="Test Radio"
        checked={true}
        onCheckedChange={onCheckedChange}
      />
    ));

    const radio = screen.getByRole('radio');
    expect(radio).toBeChecked();
    expect(radio).toHaveAttribute('data-checked', '');
  });
});
