import React, { type FC, type ComponentProps } from 'react';

const KiCircleStackSolid: FC<ComponentProps<'svg'>> = (props) => {
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
        d="M12 22C15.976 22 20 20.626 20 18V6C20 3.374 15.976 2 12 2C8.024 2 4 3.374 4 6V18C4 20.626 8.024 22 12 22ZM12 20C8.278 20 6 18.705 6 18V16.732C7.541 17.57 9.777 18 12 18C14.223 18 16.459 17.57 18 16.732V18C18 18.705 15.722 20 12 20ZM12 4C15.722 4 18 5.295 18 6C18 6.705 15.722 8 12 8C8.278 8 6 6.705 6 6C6 5.295 8.278 4 12 4ZM6 8.732C7.541 9.57 9.777 10 12 10C14.223 10 16.459 9.57 18 8.732V10C18 10.705 15.722 12 12 12C8.278 12 6 10.705 6 10V8.732ZM6 12.732C7.541 13.57 9.777 14 12 14C14.223 14 16.459 13.57 18 12.732V14C18 14.705 15.722 16 12 16C8.278 16 6 14.705 6 14V12.732Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default KiCircleStackSolid;
