import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    index: 'src/index.ts',
  },
  format: ['esm'],
  dts: {
    compilerOptions: {
      paths: {
        '@kedata-ui/slots': ['packages/slots/src/index.ts'],
        '@kedata-ui/slots/*': ['packages/slots/src/*'],
        '@kedata-ui/solid-icons': ['packages/solid-icons/src/index.ts'],
      },
    },
  },
  minify: false,
  clean: true,
  splitting: true,
  sourcemap: true,
  external: ['hex-rgb', 'clsx', '@zag-js', '@kedata-software'],
  treeshake: false,
  target: 'es2021',
  tsconfig: './tsconfig.build.json',
});
