/// <reference types="vitest" />
// Configure Vitest (https://vitest.dev/config/)

import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/guide/build.html#library-mode
export default defineConfig({
  build: {
    manifest: true,
    minify: true,
    reportCompressedSize: true,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'AfricanCountries',
      fileName: 'main',
      formats: ["es", "cjs"],
    },
  },
  server: {
    port: 3000,
  },
  plugins: [dts()],
  test: { },
});