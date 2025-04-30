import React, { type FC, type ComponentProps } from 'react';

const KiCheveronLeftSolid: FC<ComponentProps<'svg'>> = (props) => {
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
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15.2486 6.35147C15.7172 6.8201 15.7172 7.5799 15.2486 8.04853L11.2971 12L15.2486 15.9515C15.7172 16.4201 15.7172 17.1799 15.2486 17.6485C14.7799 18.1172 14.0201 18.1172 13.5515 17.6485L8.75151 12.8485C8.28288 12.3799 8.28288 11.6201 8.75151 11.1515L13.5515 6.35147C14.0201 5.88284 14.7799 5.88284 15.2486 6.35147Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default KiCheveronLeftSolid;
