import { render, screen, fireEvent } from '@solidjs/testing-library';
import { describe, test, expect, vi } from 'vitest';
import TextareaInput from '../textarea-input';
import type { TextareaInputProps, TextareaInputRef } from '../index.types';

describe('TextareaInput', () => {
  const defaultProps: TextareaInputProps = {
    initialValue: '',
    maxLength: 200,
    rows: 5,
  };

  test('renders basic textarea with counter', () => {
    render(() => <TextareaInput {...defaultProps} />);

    const textarea = screen.getByRole('textbox');
    const counter = screen.getByText('0 / 200');

    expect(textarea).toBeInTheDocument();
    expect(counter).toBeInTheDocument();
  });

  test('counter updates correctly when typing', async () => {
    render(() => <TextareaInput {...defaultProps} />);

    const textarea = screen.getByRole('textbox');
    fireEvent.input(textarea, { target: { value: 'Hello World' } });

    const counter = screen.getByText('11 / 200');
    expect(counter).toBeInTheDocument();
  });

  test('hides counter when showCounter is false', () => {
    render(() => <TextareaInput {...defaultProps} showCounter={false} />);

    const textarea = screen.getByRole('textbox');
    expect(textarea).toBeInTheDocument();

    const counter = screen.queryByText('0 / 200');
    expect(counter).not.toBeInTheDocument();
  });

  test('respects maxLength property', () => {
    const maxLength = 5;
    render(() => <TextareaInput {...defaultProps} maxLength={maxLength} />);

    const textarea = screen.getByRole('textbox');
    fireEvent.input(textarea, { target: { value: 'This is a long text' } });

    expect(textarea).toHaveValue('This ');
    expect(screen.getByText(`5 / ${maxLength}`)).toBeInTheDocument();
  });

  test('forwards ref with focus and blur methods', () => {
    let ref: TextareaInputRef | undefined;
    render(() => <TextareaInput {...defaultProps} ref={ref} />);

    const textarea = screen.getByRole('textbox');

    expect(ref).toBeTruthy();

    ref?.focus();
    expect(document.activeElement).toBe(textarea);

    ref?.blur();
    expect(document.activeElement).not.toBe(textarea);
  });

  test('Should set initial value', () => {
    const { getByPlaceholderText } = render(() => (
      <TextareaInput
        {...defaultProps}
        initialValue="Hello World"
        placeholder="Enter your text here"
      />
    ));

    const textarea = getByPlaceholderText('Enter your text here');
    expect(textarea).toHaveValue('Hello World');
  });

  // test('handles controlled value changes', () => {
  //   const onValueChange = vi.fn();
  //   const { rerender } = render(() => (
  //     <TextareaInput
  //       {...defaultProps}
  //       value="Initial"
  //       onValueChange={onValueChange}
  //     />
  //   ));

  //   const textarea = screen.getByRole('textbox');
  //   expect(textarea).toHaveValue('Initial');

  //   fireEvent.input(textarea, { target: { value: 'Updated' } });
  //   expect(onValueChange).toHaveBeenCalledWith('Updated');

  //   // Simulate controlled update
  //   rerender(() => (
  //     <TextareaInput
  //       {...defaultProps}
  //       value="Updated"
  //       onValueChange={onValueChange}
  //     />
  //   ));
  //   expect(textarea).toHaveValue('Updated');
  // });

  test('applies custom className to root component', () => {
    const customClass = 'custom-root';
    render(() => <TextareaInput {...defaultProps} class={customClass} />);

    const rootElement = screen.getByRole('textbox').parentElement;
    expect(rootElement).toHaveClass(customClass);
  });

  test('handles disabled state correctly', () => {
    render(() => <TextareaInput {...defaultProps} disabled />);

    const textarea = screen.getByRole('textbox');
    const root = textarea.parentElement;

    expect(textarea).toBeDisabled();
    expect(root).toHaveAttribute('data-disabled', '');
  });

  test('handles readOnly state correctly', () => {
    render(() => <TextareaInput {...defaultProps} readOnly />);

    const textarea = screen.getByRole('textbox');
    const root = textarea.parentElement;

    expect(textarea).toHaveAttribute('readonly');
    expect(root).toHaveAttribute('data-read-only', '');
  });

  test('handles required state correctly', () => {
    render(() => <TextareaInput {...defaultProps} required />);

    const root = screen.getByRole('textbox').parentElement;
    expect(root).toHaveAttribute('data-required', '');
  });

  test('handles invalid state correctly', () => {
    render(() => <TextareaInput {...defaultProps} invalid />);

    const root = screen.getByRole('textbox').parentElement;
    expect(root).toHaveAttribute('data-invalid', '');
  });

  test('applies correct number of rows', () => {
    const rows = 10;
    render(() => <TextareaInput {...defaultProps} rows={rows} />);

    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveAttribute('rows', String(rows));
  });

  test('applies placeholder correctly', () => {
    const placeholder = 'Enter your text here';
    render(() => <TextareaInput {...defaultProps} placeholder={placeholder} />);

    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveAttribute('placeholder', placeholder);
  });

  test('maintains counter visibility when value changes', () => {
    render(() => <TextareaInput {...defaultProps} />);

    const textarea = screen.getByRole('textbox');
    const initialCounter = screen.getByText('0 / 200');
    expect(initialCounter).toBeInTheDocument();

    fireEvent.input(textarea, { target: { value: 'New text' } });
    const updatedCounter = screen.getByText('8 / 200');
    expect(updatedCounter).toBeInTheDocument();
  });
});
