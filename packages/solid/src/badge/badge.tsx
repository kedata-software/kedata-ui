import useBadge from './use-badge';
import type { BadgeProps } from './index.types';
import type { Component } from 'solid-js';

const Badge: Component<BadgeProps> = (props) => {
  const api = useBadge(props);

  return <div {...api.getRootProps()}>{api.children}</div>;
};

export default Badge;
