import React, { type FC, type ComponentProps } from 'react';

const KiFolderOpenOutline: FC<ComponentProps<'svg'>> = (props) => {
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
        d="M5 19C3.89543 19 3 18.1046 3 17V7C3 5.89543 3.89543 5 5 5H9L11 7H15C16.1046 7 17 7.89543 17 9V10M5 19H19C20.1046 19 21 18.1046 21 17V12C21 10.8954 20.1046 10 19 10H9C7.89543 10 7 10.8954 7 12V17C7 18.1046 6.10457 19 5 19Z"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
};

export default KiFolderOpenOutline;
