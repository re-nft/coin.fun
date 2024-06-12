import { sveltekit } from '@sveltejs/kit/vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [
    nodePolyfills({
      globals: {
        Buffer: true,
        global: true,
        process: true
      },
      protocolImports: false
    }),
    sveltekit()
  ],
  optimizeDeps: {
    include: [
      'dayjs/plugin/relativeTime.js',
      'dayjs',
      '@web3auth/ethereum-provider'
    ]
  },
  server: { host: '0.0.0.0', port: 3000 },
  test: { include: ['src/**/*.{test,spec}.{js,ts}'] }
});
