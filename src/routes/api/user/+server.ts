import { json, type RequestEvent } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';

import { db } from '$lib/server/db';
import { profileParse,profiles } from '$lib/server/schema';

export async function POST({ request }: RequestEvent) {
  const userData = await request.json();

  if (!userData.verifierId) {
    return json(
      { error: 'Missing verifierId', errorCode: 'MISSING_VERIFIER_ID' },
      { status: 400 }
    );
  }

  const result = await db
    .select()
    .from(profiles)
    .where(eq(profiles.verifierId, userData.verifierId))
    .limit(1);
  const userExists = result.length == 1;

  if (!userExists) {
    const value = profileParse({
      name: userData.name,
      email: userData.email,
      profileImage: userData.profileImage,
      typeOfLogin: userData.typeOfLogin,
      aggregateVerifier: userData.aggregateVerifier,
      verifier: userData.verifier,
      verifierId: userData.verifierId
    });
    await db.insert(profiles).values(value);
  }

  return json({ success: true });
}
