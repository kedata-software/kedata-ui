import React, { type FC, type ComponentProps } from 'react';

const KiFolderUploadSolid: FC<ComponentProps<'svg'>> = (props) => {
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
        d="M4.80002 4.79999C3.47454 4.79999 2.40002 5.8745 2.40002 7.19999V16.8C2.40002 18.1255 3.47454 19.2 4.80002 19.2H19.2C20.5255 19.2 21.6 18.1255 21.6 16.8V9.59999C21.6 8.2745 20.5255 7.19999 19.2 7.19999H13.2L10.8 4.79999H4.80002ZM13.2 10.8C13.2 10.1372 12.6628 9.59999 12 9.59999C11.3373 9.59999 10.8 10.1372 10.8 10.8V12H9.60002C8.93728 12 8.40002 12.5372 8.40002 13.2C8.40002 13.8627 8.93728 14.4 9.60002 14.4H10.8V15.6C10.8 16.2627 11.3373 16.8 12 16.8C12.6628 16.8 13.2 16.2627 13.2 15.6V14.4H14.4C15.0628 14.4 15.6 13.8627 15.6 13.2C15.6 12.5372 15.0628 12 14.4 12H13.2V10.8Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default KiFolderUploadSolid;
