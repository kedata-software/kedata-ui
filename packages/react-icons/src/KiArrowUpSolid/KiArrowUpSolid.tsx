import React, { type FC, type ComponentProps } from 'react';

const KiArrowUpSolid: FC<ComponentProps<'svg'>> = (props) => {
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
        d="M3.95139 11.6485C3.48276 11.1799 3.48276 10.4201 3.95139 9.95147L11.1514 2.75147C11.62 2.28284 12.3798 2.28284 12.8484 2.75147L20.0484 9.95147C20.5171 10.4201 20.5171 11.1799 20.0484 11.6485C19.5798 12.1172 18.82 12.1172 18.3514 11.6485L13.1999 6.49705L13.1999 20.4C13.1999 21.0627 12.6627 21.6 11.9999 21.6C11.3372 21.6 10.7999 21.0627 10.7999 20.4L10.7999 6.49705L5.64844 11.6485C5.17981 12.1172 4.42002 12.1172 3.95139 11.6485Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default KiArrowUpSolid;
