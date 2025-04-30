import { defineConfig } from 'vitest/config';
import { join } from 'path';

const vitestConfig = defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vitest',
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
      '@kedata-ui/react-icons': join(
        __dirname,
        '..',
        '..',
        'packages',
        'react-icons',
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
