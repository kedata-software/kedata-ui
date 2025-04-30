import React, { type FC, type ComponentProps } from 'react';

const KiGlobeOutline: FC<ComponentProps<'svg'>> = (props) => {
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
        d="M21 12C21 16.9706 16.9705 21 12 21M21 12C21 7.02944 16.9705 3 12 3M21 12H2.99997M12 21C7.02941 21 2.99997 16.9706 2.99997 12M12 21C13.6568 21 15 16.9706 15 12C15 7.02944 13.6568 3 12 3M12 21C10.3431 21 8.99997 16.9706 8.99997 12C8.99997 7.02944 10.3431 3 12 3M2.99997 12C2.99997 7.02944 7.02941 3 12 3"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default KiGlobeOutline;
