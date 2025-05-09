import React, { type FC, type ComponentProps } from 'react';

const KiPieChartOutline: FC<ComponentProps<'svg'>> = (props) => {
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
        d="M11 3.05493C6.50004 3.55238 2.99999 7.36745 2.99999 12C2.99999 16.9706 7.02943 21 12 21C16.6325 21 20.4476 17.5 20.9451 13H11V3.05493Z"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M20.4878 9H15V3.5123C17.5572 4.41613 19.5839 6.44285 20.4878 9Z"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default KiPieChartOutline;
