import { describe, it, expect } from 'vitest';
import { render } from '@solidjs/testing-library';
import Avatar from '../avatar';

describe('Avatar', () => {
  it('Should render fallback', () => {
    const { getByText } = render(() => <Avatar fallback="JD" />);
    expect(getByText('JD')).toBeInTheDocument();
  });

  it('Should render src', () => {
    const { queryByText, container } = render(() => (
      <Avatar src="https://kedata.ai" fallback="JD" />
    ));
    const imgEl = container.querySelector('.avatar__image');

    expect(imgEl).toBeInTheDocument();
    expect(queryByText('JD')).not.toBeInTheDocument();
  });
});
