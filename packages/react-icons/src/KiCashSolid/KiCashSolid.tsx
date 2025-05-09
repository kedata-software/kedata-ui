import React, { type FC, type ComponentProps } from 'react';

const KiCashSolid: FC<ComponentProps<'svg'>> = (props) => {
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
        d="M4.80001 4.80001C3.47452 4.80001 2.40001 5.87453 2.40001 7.20001V12C2.40001 13.3255 3.47452 14.4 4.80001 14.4L4.80001 7.20001H16.8C16.8 5.87453 15.7255 4.80001 14.4 4.80001H4.80001Z"
        fill="currentColor"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.20001 12C7.20001 10.6745 8.27452 9.60001 9.60001 9.60001H19.2C20.5255 9.60001 21.6 10.6745 21.6 12V16.8C21.6 18.1255 20.5255 19.2 19.2 19.2H9.60001C8.27452 19.2 7.20001 18.1255 7.20001 16.8V12ZM14.4 16.8C15.7255 16.8 16.8 15.7255 16.8 14.4C16.8 13.0745 15.7255 12 14.4 12C13.0745 12 12 13.0745 12 14.4C12 15.7255 13.0745 16.8 14.4 16.8Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default KiCashSolid;
