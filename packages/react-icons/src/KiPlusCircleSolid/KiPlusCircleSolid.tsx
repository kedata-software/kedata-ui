import React, { type FC, type ComponentProps } from 'react';

const KiPlusCircleSolid: FC<ComponentProps<'svg'>> = (props) => {
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
        d="M12 21.6001C17.3019 21.6001 21.6 17.302 21.6 12.0001C21.6 6.69812 17.3019 2.40005 12 2.40005C6.69803 2.40005 2.39996 6.69812 2.39996 12.0001C2.39996 17.302 6.69803 21.6001 12 21.6001ZM13.2 8.40005C13.2 7.73731 12.6627 7.20006 12 7.20006C11.3372 7.20006 10.8 7.73731 10.8 8.40005V10.8001H8.39996C7.73722 10.8001 7.19996 11.3373 7.19996 12.0001C7.19996 12.6628 7.73722 13.2001 8.39996 13.2001H10.8V15.6001C10.8 16.2628 11.3372 16.8001 12 16.8001C12.6627 16.8001 13.2 16.2628 13.2 15.6001V13.2001H15.6C16.2627 13.2001 16.8 12.6628 16.8 12.0001C16.8 11.3373 16.2627 10.8001 15.6 10.8001H13.2V8.40005Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default KiPlusCircleSolid;
