import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: ['src/index.ts'],
  outExtensions: () => ({
    js: '.esm.js',
    dts: '.d.ts',
  }),
  format: ['esm'],
  dts: true,
  minify: false,
  clean: true,
  external: ['hex-rgb', 'clsx', '@zag-js'],
  treeshake: false,
  target: 'es2021',
  tsconfig: './tsconfig.build.json',
});
