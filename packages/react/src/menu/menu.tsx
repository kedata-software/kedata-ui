import useMenu from './use-menu';
import type { MenuProps } from './index.types';
import { For, Show, type Component } from 'solid-js';
import { Portal } from 'solid-js/web';

const Menu: Component<MenuProps> = (props) => {
  const api = useMenu(props);

  return (
    <>
      <api.children {...api.getChildrenProps()} />

      <Show when={api.isPresence()}>
        {(_) => (
          <Portal>
            <div {...api.getPositionerProps()}>
              <div {...api.getContentProps()}>
                <For each={api.options}>
                  {(option) => {
                    if (option.type === 'separator') {
                      return <div {...api.getSeparatorProps()} />;
                    }

                    return (
                      <div {...api.getItemProps(option)}>
                        {option.startIcon && (
                          <option.startIcon
                            {...api.getItemStartIconProps(option)}
                          />
                        )}

                        {option.label}
                      </div>
                    );
                  }}
                </For>
              </div>
            </div>
          </Portal>
        )}
      </Show>
    </>
  );
};

export default Menu;
