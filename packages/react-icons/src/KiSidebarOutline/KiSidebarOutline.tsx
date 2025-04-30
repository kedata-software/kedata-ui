import React, { type FC, type ComponentProps } from 'react';

const KiSidebarOutline: FC<ComponentProps<'svg'>> = (props) => {
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
        d="M4 3H20C21.103 3 22 3.897 22 5V19C22 20.103 21.103 21 20 21H4C2.897 21 2 20.103 2 19V5C2 3.897 2.897 3 4 3ZM20 19V5H13V19H20ZM11 19V5H4L3.999 19H11Z"
        fill="currentColor"
      />
      <path d="M6 7H9V9H6V7ZM6 11H9V13H6V11Z" fill="currentColor" />
    </svg>
  );
};

export default KiSidebarOutline;
