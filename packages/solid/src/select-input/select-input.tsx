import useSelectInput from './use-select-input';
import { Tag } from '../tag';
import { useTwMerge } from '../tw-merge';
import type { SelectInputProps } from './index.types';
import type { Component } from 'solid-js';
import { KiCheveronDownSolid } from '@kedata-ui/solid-icons';
import { SelectPicker } from '../select-picker';

const SelectField: Component<SelectInputProps> = (props) => {
  const api = useSelectInput(props);

  return (
    <>
      <button {...api.getRootProps()}>
        <div {...api.getInputWrapperProps()}>
          {/* {startAddon && <div {...api.getStartAddonProps()}>{startAddon}</div>} */}

          <div {...api.getValueProps()}>
            {(() => {
              if (api.isPlaceholderShow()) {
                return api.placeholder();
              }

              if (!api.multiple()) {
                return api.selectedOptions()[0].label;
              }

              return api.selectedOptions().map((item) => {
                return (
                  <Tag
                    closeable
                    onKeyDown={(e: any) => {
                      e.stopPropagation();

                      if (e.key === 'Escape') {
                        // buttonRef.current?.focus();
                      }
                    }}
                    onClick={(e: any) => {
                      e.stopPropagation();
                      api.removeValue(item.value);
                    }}
                  >
                    {item.label}
                  </Tag>
                );
              });
            })()}
          </div>

          <KiCheveronDownSolid {...api.getIndicatorProps()} />
        </div>
      </button>
      {api.isPresence() && (
        <div {...api.getPositionerProps()}>
          <div {...api.getContentProps()}>
            <SelectPicker {...api.getSelectPickerProps()} />
          </div>
        </div>
      )}
    </>
  );
};

export default SelectField;
