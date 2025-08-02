import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  minify: false,
  clean: true,
  external: ['hex-rgb'],
  treeshake: false,
  target: 'es2021',
});
