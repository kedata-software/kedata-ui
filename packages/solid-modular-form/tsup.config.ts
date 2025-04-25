import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    index: 'src/index.ts',
  },
  format: ['esm'],
  outExtension: ({ format }) => ({
    js: `.${format}.jsx`,
  }),
  dts: true,
  minify: false,
  clean: true,
  splitting: true,
  external: ['@modular-forms/solid'],
  treeshake: false,
  target: 'es2021',
  tsconfig: './tsconfig.build.json',
});
