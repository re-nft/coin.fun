import { text } from '@sveltejs/kit';

import { PUBLIC_SENTRY_DSN } from '$env/static/public';

const sentryUrl = PUBLIC_SENTRY_DSN ? new URL(PUBLIC_SENTRY_DSN) : undefined;

export async function POST({ request }) {
  if (!sentryUrl) {
    return text('No PUBLIC_SENTRY_DSN configured.', {
      status: 500
    });
  }

  try {
    const envelope = await request.text();

    if (!envelope) return new Response(null, { status: 204 });

    const [piece] = envelope.split('\n');
    const header = JSON.parse(piece) as { dsn: string };
    const dsn = new URL(header.dsn);
    const projectId = dsn.pathname.replace('/', '');

    if (dsn.hostname !== sentryUrl.hostname) {
      throw new Response(`Invalid sentry hostname: ${dsn.hostname}`, {
        status: 400,
        statusText: 'Bad Request'
      });
    }

    if (projectId !== sentryUrl.pathname.slice(1)) {
      throw new Error(`Invalid sentry project id: ${projectId}`);
    }

    await fetch(`${sentryUrl.origin}/api/${projectId}/envelope/`, {
      body: envelope,
      headers: { 'Content-Type': 'application/x-sentry-envelope' },
      method: 'POST'
    });

    return new Response(null, { status: 204 });
  } catch (e) {
    console.error('Error tunneling to Sentry:', e);
    return text('Error tunneling to Sentry.', { status: 500 });
  }
}
