import React, { type FC, type ComponentProps } from 'react';

const KiMinusSolid: FC<ComponentProps<'svg'>> = (props) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6 12.0001C6 11.3374 6.53726 10.8001 7.2 10.8001L16.8 10.8001C17.4627 10.8001 18 11.3374 18 12.0001C18 12.6629 17.4627 13.2001 16.8 13.2001L7.2 13.2001C6.53726 13.2001 6 12.6629 6 12.0001Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default KiMinusSolid;
