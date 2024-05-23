// vite.config.ts
import { sveltekit } from "file:///Users/naz/git/renft/coin.fun/node_modules/@sveltejs/kit/src/exports/vite/index.js";
import { nodePolyfills } from "file:///Users/naz/git/renft/coin.fun/node_modules/vite-plugin-node-polyfills/dist/index.js";
import { defineConfig } from "file:///Users/naz/git/renft/coin.fun/node_modules/vitest/dist/config.js";
var vite_config_default = defineConfig({
  plugins: [
    nodePolyfills({
      exclude: ["fs"],
      globals: {
        Buffer: true,
        global: true,
        process: true
      },
      protocolImports: true
    }),
    sveltekit()
  ],
  optimizeDeps: {
    include: [
      "dayjs/plugin/relativeTime.js",
      "dayjs",
      "@web3auth/ethereum-provider"
    ]
  },
  server: { host: "0.0.0.0", port: 3e3 },
  test: { include: ["src/**/*.{test,spec}.{js,ts}"] }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvbmF6L2dpdC9yZW5mdC9jb2luLmZ1blwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL25hei9naXQvcmVuZnQvY29pbi5mdW4vdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL25hei9naXQvcmVuZnQvY29pbi5mdW4vdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBzdmVsdGVraXQgfSBmcm9tICdAc3ZlbHRlanMva2l0L3ZpdGUnO1xuaW1wb3J0IHsgbm9kZVBvbHlmaWxscyB9IGZyb20gJ3ZpdGUtcGx1Z2luLW5vZGUtcG9seWZpbGxzJztcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGVzdC9jb25maWcnO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgbm9kZVBvbHlmaWxscyh7XG4gICAgICBleGNsdWRlOiBbJ2ZzJ10sXG4gICAgICBnbG9iYWxzOiB7XG4gICAgICAgIEJ1ZmZlcjogdHJ1ZSxcbiAgICAgICAgZ2xvYmFsOiB0cnVlLFxuICAgICAgICBwcm9jZXNzOiB0cnVlXG4gICAgICB9LFxuICAgICAgcHJvdG9jb2xJbXBvcnRzOiB0cnVlXG4gICAgfSksXG4gICAgc3ZlbHRla2l0KClcbiAgXSxcbiAgb3B0aW1pemVEZXBzOiB7XG4gICAgaW5jbHVkZTogW1xuICAgICAgJ2RheWpzL3BsdWdpbi9yZWxhdGl2ZVRpbWUuanMnLFxuICAgICAgJ2RheWpzJyxcbiAgICAgICdAd2ViM2F1dGgvZXRoZXJldW0tcHJvdmlkZXInXG4gICAgXVxuICB9LFxuICBzZXJ2ZXI6IHsgaG9zdDogJzAuMC4wLjAnLCBwb3J0OiAzMDAwIH0sXG4gIHRlc3Q6IHsgaW5jbHVkZTogWydzcmMvKiovKi57dGVzdCxzcGVjfS57anMsdHN9J10gfVxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXlRLFNBQVMsaUJBQWlCO0FBQ25TLFNBQVMscUJBQXFCO0FBQzlCLFNBQVMsb0JBQW9CO0FBRTdCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLGNBQWM7QUFBQSxNQUNaLFNBQVMsQ0FBQyxJQUFJO0FBQUEsTUFDZCxTQUFTO0FBQUEsUUFDUCxRQUFRO0FBQUEsUUFDUixRQUFRO0FBQUEsUUFDUixTQUFTO0FBQUEsTUFDWDtBQUFBLE1BQ0EsaUJBQWlCO0FBQUEsSUFDbkIsQ0FBQztBQUFBLElBQ0QsVUFBVTtBQUFBLEVBQ1o7QUFBQSxFQUNBLGNBQWM7QUFBQSxJQUNaLFNBQVM7QUFBQSxNQUNQO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsUUFBUSxFQUFFLE1BQU0sV0FBVyxNQUFNLElBQUs7QUFBQSxFQUN0QyxNQUFNLEVBQUUsU0FBUyxDQUFDLDhCQUE4QixFQUFFO0FBQ3BELENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
