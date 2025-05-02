import React from 'react';
import useTag from './use-tag';
import { KiCloseSolid } from '@kedata-ui/react-icons';
import type { TagProps } from './index.types';
import type { FC } from 'react';

const Tag: FC<TagProps> = (props) => {
  const api = useTag(props);

  return (
    <div {...api.getRootProps()}>
      {api.children}{' '}
      {api.closeable && <KiCloseSolid {...api.getCloseIconProps()} />}
    </div>
  );
};

export default Tag;
