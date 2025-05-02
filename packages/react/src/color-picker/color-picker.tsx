import React from 'react';
import useColorPicker from './use-color-picker';
import type { ColorPickerProps } from './index.types';
import type { FC } from 'react';

const ColorPicker: FC<ColorPickerProps> = (props) => {
  const api = useColorPicker(props);

  return (
    <div {...api.getRootProps()}>
      <div {...api.getAreaProps()}>
        <div {...api.getAreaBackgroundProps()}></div>
        <div {...api.getAreaThumbProps()}></div>
      </div>

      <div {...api.getChannelSliderContainerProps()}>
        <div {...api.getChannelSliderGroupProps()}>
          <div {...api.getChannelSliderProps({ channel: 'hue' })}>
            <div {...api.getChannelSliderTrackProps({ channel: 'hue' })}></div>
            <div {...api.getChannelSliderThumbProps({ channel: 'hue' })}></div>
          </div>
          <div {...api.getChannelSliderProps({ channel: 'alpha' })}>
            <div
              {...api.getChannelSliderTrackProps({ channel: 'alpha' })}
            ></div>
            <div
              {...api.getChannelSliderThumbProps({ channel: 'alpha' })}
            ></div>
          </div>
        </div>
      </div>

      <div {...api.getChannelInputContainerProps()}>
        <input
          {...api.getChannelInputProps({
            channel: 'hex',
            className: 'w-[70%]',
          })}
        />
        <input
          {...api.getChannelInputProps({
            channel: 'alpha',
            className: 'w-[30%]',
          })}
        />
      </div>

      {api.hasSwatches && (
        <div {...api.getSwatchContainerProps()}>
          <div {...api.getSwatchLabelProps()}></div>
          <div {...api.getSwatchGroupProps()}>
            {api.swatches?.map((swatch) => {
              return (
                <button
                  key={swatch}
                  {...api.getSwatchTriggerProps({
                    get value() {
                      return swatch;
                    },
                  })}
                >
                  <div
                    {...api.getSwatchProps({
                      get value() {
                        return swatch;
                      },
                    })}
                  />
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
