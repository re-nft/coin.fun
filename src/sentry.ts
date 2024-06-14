import { init as initSentry } from '@sentry/sveltekit';

import { PUBLIC_SENTRY_DSN } from '$env/static/public';

export * from '@sentry/sveltekit';

export function init(options?: Parameters<typeof initSentry>[0]) {
  initSentry({
    dsn: PUBLIC_SENTRY_DSN,
    tracesSampleRate: import.meta.env.PROD ? 0.1 : 1,
    environment: import.meta.env.MODE,
    ...options
  });
}
