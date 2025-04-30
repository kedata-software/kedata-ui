import React, { type FC, type ComponentProps } from 'react';

const KiFolderSolid: FC<ComponentProps<'svg'>> = (props) => {
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
        d="M2.39996 7.19993C2.39996 5.87444 3.47448 4.79993 4.79996 4.79993H10.8L13.2 7.19993H19.2C20.5254 7.19993 21.6 8.27444 21.6 9.59993V16.7999C21.6 18.1254 20.5254 19.1999 19.2 19.1999H4.79996C3.47448 19.1999 2.39996 18.1254 2.39996 16.7999V7.19993Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default KiFolderSolid;
