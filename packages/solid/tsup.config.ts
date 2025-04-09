import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'],
  dts: true,
  minify: false,
  clean: true,
  splitting: true,
  sourcemap: true,
  external: ['hex-rgb', 'clsx', '@zag-js'],
  treeshake: false,
  target: 'es2021',
  tsconfig: './tsconfig.build.json',
});
