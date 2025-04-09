import usePagination from './use-pagination';
import { Button } from '../button';
import type { PaginationProps } from './index.types';
import { For, type Component } from 'solid-js';

const Pagination: Component<PaginationProps> = (props) => {
  const api = usePagination(props);

  return (
    <div {...api.getRootProps()}>
      <button {...api.getPrevTriggerProps()}>Prev</button>

      <For each={api.pages()}>
        {(item, index) => {
          if (item.type === 'ellipsis') {
            return (
              <Button
                size={api.size()}
                variant="text"
                {...api.getEllipsisProps({
                  get index() {
                    return index();
                  },
                })}
              />
            );
          }

          return (
            <Button
              size={api.size()}
              variant={
                item.value === api.page()
                  ? api.activeVariant()
                  : api.inactiveVariant()
              }
              {...api.getItemProps(item)}
            />
          );
        }}
      </For>

      <Button size={api.size()} idAsRoot {...api.getNextTriggerProps()}>
        Next
      </Button>
    </div>
  );
};

export default Pagination;
