import useBadge from './use-badge';
import React from 'react';
import type { BadgeProps } from './index.types';
import type { FC } from 'react';

const Badge: FC<BadgeProps> = (props) => {
  const api = useBadge(props);

  return <div {...api.getRootProps()}>{api.children}</div>;
};

export default Badge;
