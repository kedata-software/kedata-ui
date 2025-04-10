import { defineConfig } from 'vitest/config';
import { join } from 'path';
import solidPlugin from 'vite-plugin-solid';

const vitestConfig = defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vitest',
  plugins: [solidPlugin()],
  resolve: {
    alias: {
      '@kedata-ui/slots': join(
        __dirname,
        '..',
        '..',
        'packages',
        'slots',
        'src',
      ),
      '@kedata-ui/solid-icons': join(
        __dirname,
        '..',
        '..',
        'packages',
        'solid-icons',
        'src',
      ),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['src/**/*.test.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    reporters: ['default'],
    setupFiles: './tests/setup.ts',
    coverage: {
      reportsDirectory: './coverage',
      provider: 'v8',
      include: ['src/**/*'],
      enabled: true,
      exclude: [
        'src/**/*.{test,stories}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}',
        'src/**/index.{js,mjs,cjs,ts,mts,cts,jsx,tsx}',
      ],
    },
  },
});

export default vitestConfig;
