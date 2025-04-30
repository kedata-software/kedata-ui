import React, { type FC, type ComponentProps } from 'react';

const KiPencilAltSolid: FC<ComponentProps<'svg'>> = (props) => {
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
        d="M20.8971 3.10294C19.9598 2.16568 18.4402 2.16568 17.503 3.10294L8.40002 12.2059V15.6H11.7941L20.8971 6.49705C21.8343 5.55979 21.8343 4.0402 20.8971 3.10294Z"
        fill="currentColor"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2.40002 7.19999C2.40002 5.87451 3.47454 4.79999 4.80002 4.79999H9.60002C10.2628 4.79999 10.8 5.33725 10.8 5.99999C10.8 6.66274 10.2628 7.19999 9.60002 7.19999H4.80002V19.2H16.8V14.4C16.8 13.7373 17.3373 13.2 18 13.2C18.6628 13.2 19.2 13.7373 19.2 14.4V19.2C19.2 20.5255 18.1255 21.6 16.8 21.6H4.80002C3.47454 21.6 2.40002 20.5255 2.40002 19.2V7.19999Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default KiPencilAltSolid;
