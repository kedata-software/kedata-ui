import Tag from '../tag';
import { render } from '@solidjs/testing-library';
import { describe, expect, it } from 'vitest';

describe('Tag', () => {
  it('Should render children', () => {
    const { getByText } = render(() => <Tag>Tag</Tag>);

    expect(getByText('Tag')).toBeInTheDocument();
  });

  it('Should render close icon', () => {
    const { container } = render(() => <Tag closeable>Tag</Tag>);

    const closeIcon = container.querySelector('.tag__close-icon');
    expect(closeIcon).toBeInTheDocument();
  });
});
