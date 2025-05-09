import React, { type FC, type ComponentProps } from 'react';

const KiLogoutOutline: FC<ComponentProps<'svg'>> = (props) => {
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
        d="M17 16L21 12M21 12L17 8M21 12L6.99999 12M13 16V17C13 18.6569 11.6568 20 10 20H5.99999C4.34314 20 2.99999 18.6569 2.99999 17V7C2.99999 5.34315 4.34314 4 5.99999 4H10C11.6568 4 13 5.34315 13 7V8"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default KiLogoutOutline;
