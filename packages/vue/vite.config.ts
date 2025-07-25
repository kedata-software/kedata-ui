import { defineConfig } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      // src/indext.ts is where we have exported the component(s)
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'vue',
      // the name of the output files when the build is run
      fileName: 'index',
    },
    minify: false,
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: [
        'vue',
        /^@zag-js\/*/,
        /^@kedata-ui\/*/,
        'tailwind-merge',
        'clsx',
        'sweetalert2',
      ],
      output: {
        dir: 'dist',
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
});
