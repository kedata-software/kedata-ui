import { render, screen } from '@solidjs/testing-library';
import { describe, test, expect } from 'vitest';
import ChatBubble from '../chat-bubble';
import type { ChatBubbleProps } from '../index.types';

describe('ChatBubble', () => {
  const defaultProps: ChatBubbleProps = {
    children: 'Hello World',
  };

  test('renders basic chat bubble with default variant (question)', () => {
    render(() => <ChatBubble {...defaultProps} />);

    const root = screen.getByText('Hello World').parentElement;
    expect(root).toHaveAttribute('data-variant', 'question');
  });

  test('renders chat bubble with answer variant', () => {
    render(() => <ChatBubble {...defaultProps} variant="answer" />);

    const root = screen.getByText('Hello World').parentElement;
    expect(root).toHaveAttribute('data-variant', 'answer');
  });

  test('renders chat bubble with time', () => {
    const time = '12:00 PM';
    render(() => <ChatBubble {...defaultProps} time={time} />);

    const timeElement = screen.getByText(time);
    expect(timeElement).toBeInTheDocument();
  });

  test('does not render footer when time is not provided', () => {
    const { container } = render(() => <ChatBubble {...defaultProps} />);

    // Using a more specific selector to find the footer
    const footer = container.querySelector('[class*="footer"]');
    expect(footer).not.toBeInTheDocument();
  });

  test('applies custom className to root element', () => {
    const customClass = 'custom-chat-bubble';
    render(() => <ChatBubble {...defaultProps} class={customClass} />);

    const root = screen.getByText('Hello World').parentElement;
    expect(root).toHaveClass(customClass);
  });

  test('forwards ref to root element', () => {
    let ref: HTMLDivElement | undefined;
    render(() => <ChatBubble {...defaultProps} ref={ref} />);

    expect(ref).toBeTruthy();
    expect(ref?.tagName).toBe('DIV');
  });

  test('renders children content', () => {
    const childContent = <span data-testid="child">Custom Content</span>;
    render(() => <ChatBubble>{childContent}</ChatBubble>);

    const child = screen.getByTestId('child');
    expect(child).toBeInTheDocument();
    expect(child).toHaveTextContent('Custom Content');
  });

  test('applies custom classNames through classNames prop', () => {
    const customClassNames = {
      root: 'custom-root',
      bubble: 'custom-bubble',
      footer: 'custom-footer',
      time: 'custom-time',
    };

    render(() => (
      <ChatBubble
        {...defaultProps}
        time="12:00 PM"
        classNames={customClassNames}
      />
    ));

    const root = screen.getByText('Hello World').parentElement;
    const bubble = screen.getByText('Hello World');
    const footer = screen.getByText('12:00 PM').parentElement;
    const time = screen.getByText('12:00 PM');

    expect(root).toHaveClass('custom-root');
    expect(bubble).toHaveClass('custom-bubble');
    expect(footer).toHaveClass('custom-footer');
    expect(time).toHaveClass('custom-time');
  });

  test('maintains data-variant attribute across all elements', () => {
    const variant = 'answer';
    const { container } = render(() => (
      <ChatBubble {...defaultProps} variant={variant} time="12:00 PM" />
    ));

    const elements = container.querySelectorAll(`[data-variant="${variant}"]`);
    expect(elements.length).toBeGreaterThan(0);
    elements.forEach((element) => {
      expect(element).toHaveAttribute('data-variant', variant);
    });
  });

  test('handles empty children', () => {
    render(() => <ChatBubble />);

    const bubble = document.querySelector('[class*="bubble"]');
    expect(bubble).toBeInTheDocument();
  });

  test('renders nested components correctly', () => {
    const nestedContent = (
      <div data-testid="nested">
        <span>Level 1</span>
        <div>
          <span>Level 2</span>
        </div>
      </div>
    );

    render(() => <ChatBubble>{nestedContent}</ChatBubble>);

    const nested = screen.getByTestId('nested');
    expect(nested).toBeInTheDocument();
    expect(screen.getByText('Level 1')).toBeInTheDocument();
    expect(screen.getByText('Level 2')).toBeInTheDocument();
  });

  test('respects HTML attributes passed to root div', () => {
    render(() => (
      <ChatBubble
        {...defaultProps}
        data-testid="chat-bubble"
        aria-label="Chat message"
        role="article"
      />
    ));

    const root = screen.getByTestId('chat-bubble');
    expect(root).toHaveAttribute('aria-label', 'Chat message');
  });
});
