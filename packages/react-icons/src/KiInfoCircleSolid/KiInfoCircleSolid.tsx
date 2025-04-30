import React, { type FC, type ComponentProps } from 'react';

const KiInfoCircleSolid: FC<ComponentProps<'svg'>> = (props) => {
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
        d="M21.6 12.0001C21.6 17.302 17.302 21.6001 12 21.6001C6.69809 21.6001 2.40002 17.302 2.40002 12.0001C2.40002 6.69812 6.69809 2.40005 12 2.40005C17.302 2.40005 21.6 6.69812 21.6 12.0001ZM13.2 16.8001C13.2 17.4628 12.6628 18.0001 12 18.0001C11.3373 18.0001 10.8 17.4628 10.8 16.8001C10.8 16.1373 11.3373 15.6001 12 15.6001C12.6628 15.6001 13.2 16.1373 13.2 16.8001ZM12 6.00006C11.3373 6.00006 10.8 6.53731 10.8 7.20006V12.0001C10.8 12.6628 11.3373 13.2001 12 13.2001C12.6628 13.2001 13.2 12.6628 13.2 12.0001V7.20006C13.2 6.53731 12.6628 6.00006 12 6.00006Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default KiInfoCircleSolid;
