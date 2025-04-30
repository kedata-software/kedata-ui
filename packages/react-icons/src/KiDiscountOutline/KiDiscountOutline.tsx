import React, { type FC, type ComponentProps } from 'react';

const KiDiscountOutline: FC<ComponentProps<'svg'>> = (props) => {
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
        d="M8.99999 13.9999L15 7.99994M9.50001 8.49994H9.51001M14.5 13.4999H14.51M19 20.9999V4.99994C19 3.89537 18.1046 2.99994 17 2.99994H6.99998C5.89542 2.99994 4.99998 3.89537 4.99998 4.99994V20.9999L8.49999 18.9999L12 20.9999L15.5 18.9999L19 20.9999ZM9.99999 8.49994C9.99999 8.77608 9.77613 8.99994 9.49999 8.99994C9.22384 8.99994 8.99999 8.77608 8.99999 8.49994C8.99999 8.2238 9.22384 7.99994 9.49999 7.99994C9.77613 7.99994 9.99999 8.2238 9.99999 8.49994ZM15 13.4999C15 13.7761 14.7761 13.9999 14.5 13.9999C14.2238 13.9999 14 13.7761 14 13.4999C14 13.2238 14.2238 12.9999 14.5 12.9999C14.7761 12.9999 15 13.2238 15 13.4999Z"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default KiDiscountOutline;
