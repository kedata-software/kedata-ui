import React, { type FC, type ComponentProps } from 'react';

const KiClipboardOutline: FC<ComponentProps<'svg'>> = (props) => {
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
        d="M8.99997 5H6.99997C5.8954 5 4.99997 5.89543 4.99997 7V19C4.99997 20.1046 5.8954 21 6.99997 21H17C18.1045 21 19 20.1046 19 19V7C19 5.89543 18.1045 5 17 5H15M8.99997 5C8.99997 6.10457 9.8954 7 11 7H13C14.1045 7 15 6.10457 15 5M8.99997 5C8.99997 3.89543 9.8954 3 11 3H13C14.1045 3 15 3.89543 15 5"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
};

export default KiClipboardOutline;
