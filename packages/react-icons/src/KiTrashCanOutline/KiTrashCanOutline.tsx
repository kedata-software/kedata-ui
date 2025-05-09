import React, { type FC, type ComponentProps } from 'react';

const KiTrashCanOutline: FC<ComponentProps<'svg'>> = (props) => {
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
        d="M19 7L18.1327 19.1425C18.0579 20.1891 17.187 21 16.1377 21H7.86222C6.81294 21 5.94206 20.1891 5.86731 19.1425L4.99998 7M9.99998 11V17M14 11V17M15 7V4C15 3.44772 14.5523 3 14 3H9.99998C9.4477 3 8.99998 3.44772 8.99998 4V7M3.99998 7H20"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default KiTrashCanOutline;
