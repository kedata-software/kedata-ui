import React, { type FC, type ComponentProps } from 'react';

const KiPieChartSolid: FC<ComponentProps<'svg'>> = (props) => {
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
        d="M2.4 12C2.4 6.69806 6.69807 2.39999 12 2.39999V12H21.6C21.6 17.3019 17.3019 21.6 12 21.6C6.69807 21.6 2.4 17.3019 2.4 12Z"
        fill="currentColor"
      />
      <path
        d="M14.4 2.70234C17.7735 3.57062 20.4294 6.22652 21.2976 9.60005H14.4V2.70234Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default KiPieChartSolid;
