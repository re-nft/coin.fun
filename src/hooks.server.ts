import { sequence } from '@sveltejs/kit/hooks';

import { questsHandle, sessionHandle, supabaseHandle } from './hooks/server';
import * as Sentry from './sentry';

Sentry.init();

export const handle = sequence(
  Sentry.sentryHandle(),
  supabaseHandle,
  sessionHandle,
  questsHandle
);

export const handleError = Sentry.handleErrorWithSentry();
