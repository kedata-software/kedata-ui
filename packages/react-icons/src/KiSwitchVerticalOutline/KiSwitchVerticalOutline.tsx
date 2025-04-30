import React, { type FC, type ComponentProps } from 'react';

const KiSwitchVerticalOutline: FC<ComponentProps<'svg'>> = (props) => {
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
        d="M7.00003 16V3.99998M7.00003 3.99998L3.00003 7.99998M7.00003 3.99998L11 7.99998M17 7.99998V20M17 20L21 16M17 20L13 16"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default KiSwitchVerticalOutline;
