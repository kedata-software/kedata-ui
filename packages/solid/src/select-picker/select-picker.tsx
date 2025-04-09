import useSelectPicker from './use-select-picker';
import { TextInput } from '../text-input';
import type { SelectPickerProps } from './index.types';
import { For, type Component } from 'solid-js';

const SelectPicker: Component<SelectPickerProps> = (props) => {
  const api = useSelectPicker(props);

  return (
    <div {...api.getRootProps()}>
      <div {...api.getItemGroupProps()}>
        {api.withSearch() && <TextInput {...api.getSearchInputProps()} />}

        <For each={api.searchOptions()}>
          {(item) => {
            return (
              <div
                {...api.getItemProps({
                  get item() {
                    return item;
                  },
                })}
              >
                <div
                  {...api.getItemTextProps({
                    get item() {
                      return item;
                    },
                  })}
                >
                  {item.label}
                </div>
              </div>
            );
          }}
        </For>
      </div>
    </div>
  );
};

export default SelectPicker;
