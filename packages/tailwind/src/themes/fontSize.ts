import type { ThemeConfig } from 'tailwindcss/types/config';

const fontSize: ThemeConfig['fontSize'] = {
  'body-sm': ['0.875em', { lineHeight: '1.25em' }],
  'body-base': ['1em', { lineHeight: '1.5em' }],
  'body-lg': ['1.125em', { lineHeight: '1.75em' }],

  'btn-sm': ['0.875em', { lineHeight: '1.5em' }],
  'btn-base': ['1em', { lineHeight: '1.25em' }],
  'btn-lg': ['1.125em', { lineHeight: '1em' }],
};

export default fontSize;
