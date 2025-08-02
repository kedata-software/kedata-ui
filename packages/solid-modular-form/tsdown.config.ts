import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: {
    index: 'src/index.ts',
  },
  format: ['esm'],
  outExtensions: () => ({
    js: '.esm.jsx',
    dts: '.d.ts',
  }),
  dts: true,
  minify: false,
  clean: true,
  external: ['@modular-forms/solid'],
  treeshake: false,
  target: 'es2021',
  tsconfig: './tsconfig.build.json',
});
