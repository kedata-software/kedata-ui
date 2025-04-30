import React, { type FC, type ComponentProps } from 'react';

const KiDuplicateSolid: FC<ComponentProps<'svg'>> = (props) => {
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
        d="M8.39998 10.8C8.39998 9.47455 9.47449 8.40004 10.8 8.40004H18C19.3255 8.40004 20.4 9.47455 20.4 10.8V18C20.4 19.3255 19.3255 20.4 18 20.4H10.8C9.47449 20.4 8.39998 19.3255 8.39998 18V10.8Z"
        fill="currentColor"
      />
      <path
        d="M5.99998 3.60004C4.67449 3.60004 3.59998 4.67455 3.59998 6.00004V13.2C3.59998 14.5255 4.67449 15.6 5.99998 15.6L5.99998 6.00004H15.6C15.6 4.67455 14.5255 3.60004 13.2 3.60004H5.99998Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default KiDuplicateSolid;
