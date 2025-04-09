import TextField from '../text-input';
import { fireEvent, render } from '@solidjs/testing-library';
import { describe, expect, it } from 'vitest';
import type { TextInputRef } from '../index.types';

describe('TextField', () => {
  it('Should render input', () => {
    const { getByTestId } = render(() => (
      <TextField data-testid="text-input" />
    ));

    const textFieldEl = getByTestId('text-input');
    expect(textFieldEl).toBeInTheDocument();
  });

  it('Should render start icon', () => {
    const { container } = render(() => (
      <TextField startIcon={(props) => <span {...props}>Start icon</span>} />
    ));

    const startIconEl = container.querySelector('.text-input__start-icon');
    expect(startIconEl).toBeInTheDocument();
    expect(startIconEl).toHaveTextContent('Start icon');
  });

  it('Should render end icon', () => {
    const { container } = render(() => (
      <TextField endIcon={(props) => <span {...props}>End icon</span>} />
    ));

    const endIconEl = container.querySelector('.text-input__end-icon');
    expect(endIconEl).toBeInTheDocument();
    expect(endIconEl).toHaveTextContent('End icon');
  });

  it('Should render start addon', () => {
    const { container } = render(() => (
      <TextField startAddon={() => <span>Start addon</span>} />
    ));

    const startAddonEl = container.querySelector('.text-input__start-addon');
    expect(startAddonEl).toBeInTheDocument();
    expect(startAddonEl).toHaveTextContent('Start addon');
  });

  it('Should render end addon', () => {
    const { container } = render(() => (
      <TextField endAddon={(props) => <span {...props}>End addon</span>} />
    ));

    const endAddonEl = container.querySelector('.text-input__end-addon');
    expect(endAddonEl).toBeInTheDocument();
    expect(endAddonEl).toHaveTextContent('End addon');
  });

  it('Should focus input', async () => {
    let ref: TextInputRef | undefined;
    const { container } = render(() => <TextField ref={ref} />);

    ref?.focus();

    const inputEl = container.querySelector(
      '.text-input__input',
    ) as HTMLInputElement;

    expect(inputEl).toHaveFocus();
  });

  it('Should blur input', () => {
    let ref: TextInputRef | undefined;
    const { container } = render(() => <TextField ref={ref} />);

    const inputEl = container.querySelector(
      '.text-input__input',
    ) as HTMLInputElement;

    ref?.focus();
    expect(inputEl).toHaveFocus();
    ref?.blur();
    expect(inputEl).not.toHaveFocus();
  });

  it('Should call onChange', () => {
    const onChange = vitest.fn();
    const { container } = render(() => <TextField onValueChange={onChange} />);

    const inputEl = container.querySelector(
      '.text-input__input',
    ) as HTMLInputElement;

    fireEvent.input(inputEl, {
      target: {
        value: 'Hello',
      },
    });

    expect(onChange).toHaveBeenCalled();
  });

  it('Should set aria-describedby attribute', () => {
    const { getByPlaceholderText } = render(() => (
      <TextField invalid name="email" id="text-field" placeholder="Email" />
    ));

    const inputEl = getByPlaceholderText('Email');

    expect(inputEl).toHaveAttribute(
      'aria-describedby',
      'text-field__error-message',
    );
  });
});
