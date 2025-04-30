import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  outExtension: ({ format }) => ({
    js: `.${format}.js`,
  }),
  format: ['esm'],
  dts: true,
  minify: false,
  clean: true,
  splitting: true,
  external: ['hex-rgb', 'clsx', '@zag-js'],
  treeshake: false,
  target: 'es2021',
  tsconfig: './tsconfig.build.json',
});
