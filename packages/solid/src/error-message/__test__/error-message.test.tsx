import { describe, it, expect } from 'vitest';
import { render } from '@solidjs/testing-library';
import ErrorMessage from '../error-message';

describe('ErrorMessage', () => {
  it('Should render errors', () => {
    const { getByText, getByTestId } = render(() => (
      <ErrorMessage data-testid="error-message" error={'Error'} />
    ));

    expect(getByTestId('error-message')).toBeInTheDocument();

    expect(getByText('Error')).toBeInTheDocument();
  });

  it('Should render errors with object', () => {
    const { getByText, getByTestId } = render(() => (
      <ErrorMessage error={{ message: 'Error' }} />
    ));

    expect(getByText('Error')).toBeInTheDocument();
  });

  it('Should render error with Error class', () => {
    const { getByText } = render(() => (
      <ErrorMessage error={new Error('Error')} />
    ));

    expect(getByText('Error')).toBeInTheDocument();
  });

  it('Should hide error when error is undefined', () => {
    const { queryByText } = render(() => <ErrorMessage />);

    expect(queryByText('Error')).not.toBeInTheDocument();
  });

  it('Should set id from for prop', () => {
    const { getByTestId } = render(() => (
      <ErrorMessage for="test" error="Error" data-testid="error-message" />
    ));

    expect(getByTestId('error-message')).toHaveAttribute(
      'id',
      'test__error-message',
    );
  });
});
