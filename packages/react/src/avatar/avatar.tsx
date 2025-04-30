import useAvatar from './use-avatar';
import type { AvatarProps } from './index.types';
import type { FC } from 'react';
import React from 'react';

const Avatar: FC<AvatarProps> = (props) => {
  const api = useAvatar(props);

  return (
    <div {...api.getRootProps()}>
      {api.fallback && !api.src && (
        <span {...api.getFallbackProps()}>{api.fallback}</span>
      )}

      {api.src && <img {...api.getImageProps()} />}
    </div>
  );
};

export default Avatar;
