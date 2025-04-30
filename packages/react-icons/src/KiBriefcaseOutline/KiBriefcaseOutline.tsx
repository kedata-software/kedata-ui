import React, { type FC, type ComponentProps } from 'react';

const KiBriefcaseOutline: FC<ComponentProps<'svg'>> = (props) => {
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
        d="M21 13.2554C18.2207 14.3805 15.1827 15 12 15C8.81727 15 5.77926 14.3805 2.99997 13.2554M16 6V4C16 2.89543 15.1045 2 14 2H9.99997C8.8954 2 7.99997 2.89543 7.99997 4V6M12 12H12.01M4.99997 20H19C20.1045 20 21 19.1046 21 18V8C21 6.89543 20.1045 6 19 6H4.99997C3.8954 6 2.99997 6.89543 2.99997 8V18C2.99997 19.1046 3.8954 20 4.99997 20Z"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default KiBriefcaseOutline;
