import React, { type FC, type ComponentProps } from 'react';

const KiPencilAltOutline: FC<ComponentProps<'svg'>> = (props) => {
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
        d="M10.9999 5H5.99994C4.89537 5 3.99994 5.89543 3.99994 7V18C3.99994 19.1046 4.89537 20 5.99994 20H16.9999C18.1045 20 18.9999 19.1046 18.9999 18V13M17.5857 3.58579C18.3668 2.80474 19.6331 2.80474 20.4142 3.58579C21.1952 4.36683 21.1952 5.63316 20.4142 6.41421L11.8284 15H8.99994L8.99994 12.1716L17.5857 3.58579Z"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default KiPencilAltOutline;
