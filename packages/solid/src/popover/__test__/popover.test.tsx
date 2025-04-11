import { render, screen, fireEvent, cleanup } from '@solidjs/testing-library';
import { describe, it, expect, afterEach, vi } from 'vitest';
import Popover from '../popover';
import { Component } from 'solid-js';
import { delayAsync } from '@kedata-software/toolkit-js';

describe('Popover', () => {
  afterEach(() => {
    cleanup();
  });

  const PopoverContent: Component<{ close: () => void; isOpen: boolean }> = (
    props,
  ) => (
    <div data-testid="popover-content">
      Popover content
      <button onClick={props.close} data-testid="close-button">
        Close
      </button>
    </div>
  );

  it('renders trigger button correctly', () => {
    render(() => (
      <Popover content={PopoverContent}>
        {(props) => <button {...props}>Open popover</button>}
      </Popover>
    ));

    expect(screen.getByText('Open popover')).toBeInTheDocument();
  });

  it('shows popover content when trigger is clicked', async () => {
    render(() => (
      <Popover content={PopoverContent}>
        {(props) => <button {...props}>Open popover</button>}
      </Popover>
    ));

    expect(screen.queryByTestId('popover-content')).not.toBeInTheDocument();

    const trigger = screen.getByText('Open popover');
    await fireEvent.click(trigger);

    expect(screen.getByTestId('popover-content')).toBeInTheDocument();
  });

  it('hides popover content when close button is clicked', async () => {
    render(() => (
      <Popover content={PopoverContent}>
        {(props) => <button {...props}>Open popover</button>}
      </Popover>
    ));

    // Open popover
    const trigger = screen.getByText('Open popover');
    await fireEvent.click(trigger);

    // Click close button
    const closeButton = screen.getByTestId('close-button');
    await fireEvent.click(closeButton);

    await delayAsync(300);

    expect(screen.queryByTestId('popover-content')).not.toBeInTheDocument();
  });

  it('handles controlled state correctly', async () => {
    const onIsOpenChange = vi.fn();

    render(() => (
      <Popover
        isOpen={true}
        onIsOpenChange={onIsOpenChange}
        content={PopoverContent}
      >
        {(props) => <button {...props}>Open popover</button>}
      </Popover>
    ));

    expect(screen.getByTestId('popover-content')).toBeInTheDocument();

    const closeButton = screen.getByTestId('close-button');
    await fireEvent.click(closeButton);

    expect(onIsOpenChange).toHaveBeenCalledWith(false);
  });

  it('respects initial open state', () => {
    render(() => (
      <Popover initialIsOpen={true} content={PopoverContent}>
        {(props) => <button {...props}>Open popover</button>}
      </Popover>
    ));

    expect(screen.getByTestId('popover-content')).toBeInTheDocument();
  });

  it('passes correct placement prop', () => {
    render(() => (
      <Popover placement="top" content={PopoverContent}>
        {(props) => <button {...props}>Open popover</button>}
      </Popover>
    ));

    const trigger = screen.getByText('Open popover');
    fireEvent.click(trigger);

    // Check if the positioner has the correct data-placement attribute
    const positioner = screen.getByTestId('popover-content').parentElement;
    expect(positioner).toHaveAttribute('data-placement', 'top');
  });
});
