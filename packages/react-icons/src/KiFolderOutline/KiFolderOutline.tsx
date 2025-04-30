import React, { type FC, type ComponentProps } from 'react';

const KiFolderOutline: FC<ComponentProps<'svg'>> = (props) => {
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
        d="M3 6.99994V16.9999C3 18.1045 3.89543 18.9999 5 18.9999H19C20.1046 18.9999 21 18.1045 21 16.9999V8.99994C21 7.89537 20.1046 6.99994 19 6.99994H13L11 4.99994H5C3.89543 4.99994 3 5.89537 3 6.99994Z"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default KiFolderOutline;
