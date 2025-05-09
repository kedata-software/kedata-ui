import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    accordion: 'src/accordion/index.ts',
    avatar: 'src/avatar/index.ts',
    badge: 'src/badge/index.ts',
    button: 'src/button/index.ts',
    'chat-bubble': 'src/chat-bubble/index.ts',
    checkbox: 'src/checkbox/index.ts',
    'color-input': 'src/color-input/index.ts',
    'color-picker': 'src/color-picker/index.ts',
    'data-table': 'src/data-table/index.ts',
    'date-picker': 'src/date-picker/index.ts',
    'dialog-body': 'src/dialog-body/index.ts',
    'dialog-header': 'src/dialog-header/index.ts',
    'dialog-footer': 'src/dialog-footer/index.ts',
    'dialog-content': 'src/dialog-content/index.ts',
    'error-list': 'src/error-list/index.ts',
    'error-message': 'src/error-message/index.ts',
    feedback: 'src/feedback/index.ts',
    'form-field': 'src/form-field/index.ts',
    'helper-text': 'src/helper-text/index.ts',
    'icon-button': 'src/icon-button/index.ts',
    input: 'src/input/index.ts',
    label: 'src/label/index.ts',
    menu: 'src/menu/index.ts',
    pagination: 'src/pagination/index.ts',
    'password-input': 'src/password-input/index.ts',
    popover: 'src/popover/index.ts',
    'pin-input': 'src/pin-input/index.ts',
    tooltip: 'src/tooltip/index.ts',
    radio: 'src/radio/index.ts',
    'radio-group': 'src/radio-group/index.ts',
    'select-input': 'src/select-input/index.ts',
    'select-picker': 'src/select-picker/index.ts',
    'swal-alert': 'src/swal-alert/index.ts',
    'swal-confirmation': 'src/swal-confirmation/index.ts',
    'swal-toast': 'src/swal-toast/index.ts',
    switch: 'src/switch/index.ts',
    tag: 'src/tag/index.ts',
    'text-input': 'src/text-input/index.ts',
    'textarea-input': 'src/textarea-input/index.ts',
    tw: 'src/tw/index.ts',
  },
  format: ['cjs', 'esm'],
  dts: true,
  minify: false,
  clean: true,
  external: ['hex-rgb', 'tailwind-merge', 'tailwind-variants', 'clsx'],
  target: 'es2021',
});
