import useTag from './use-tag';
import { KiCloseSolid } from '@kedata-ui/solid-icons';
import type { Component } from 'solid-js';
import type { TagProps } from './index.types';

const Tag: Component<TagProps> = (props) => {
  const api = useTag(props);

  return (
    <div {...api.getRootProps()}>
      {api.children}{' '}
      {api.closeable && <KiCloseSolid {...api.getCloseIconProps()} />}
    </div>
  );
};

export default Tag;
