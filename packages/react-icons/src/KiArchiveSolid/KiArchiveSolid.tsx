import React, { type FC, type ComponentProps } from 'react';

const KiArchiveSolid: FC<ComponentProps<'svg'>> = (props) => {
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
        d="M4.80001 3.60001C3.47452 3.60001 2.40001 4.67452 2.40001 6.00001C2.40001 7.32549 3.47452 8.40001 4.80001 8.40001H19.2C20.5255 8.40001 21.6 7.32549 21.6 6.00001C21.6 4.67452 20.5255 3.60001 19.2 3.60001H4.80001Z"
        fill="currentColor"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.60001 9.60001H20.4V18C20.4 19.3255 19.3255 20.4 18 20.4H6.00001C4.67452 20.4 3.60001 19.3255 3.60001 18V9.60001ZM9.60001 13.2C9.60001 12.5373 10.1373 12 10.8 12H13.2C13.8627 12 14.4 12.5373 14.4 13.2C14.4 13.8627 13.8627 14.4 13.2 14.4H10.8C10.1373 14.4 9.60001 13.8627 9.60001 13.2Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default KiArchiveSolid;
