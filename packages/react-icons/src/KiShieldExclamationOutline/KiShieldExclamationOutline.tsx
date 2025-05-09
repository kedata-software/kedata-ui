import React, { type FC, type ComponentProps } from 'react';

const KiShieldExclamationOutline: FC<ComponentProps<'svg'>> = (props) => {
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
        d="M12 9V11M12 15H12.01M20.6179 5.98433C20.4132 5.99471 20.2072 5.99996 20 5.99996C16.9265 5.99996 14.123 4.84452 11.9999 2.94433C9.87691 4.84445 7.07339 5.99984 4 5.99984C3.79277 5.99984 3.58678 5.99459 3.38213 5.98421C3.1327 6.94782 3 7.95841 3 9C3 14.5915 6.82432 19.2898 12 20.6219C17.1757 19.2898 21 14.5915 21 9C21 7.95846 20.8673 6.94791 20.6179 5.98433Z"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default KiShieldExclamationOutline;
