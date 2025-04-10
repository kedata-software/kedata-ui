import { expect, afterEach } from 'vitest';
import { cleanup } from '@solidjs/testing-library';
import * as matchers from '@testing-library/jest-dom/matchers';

expect.extend(matchers);

afterEach(() => {
  cleanup();
});
