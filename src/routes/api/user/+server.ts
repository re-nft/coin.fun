// src/routes/api/user/create.ts
import { json, type RequestEvent } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import { user, userParse } from '$lib/server/schema';
import { eq } from 'drizzle-orm';

export async function POST({ request }: RequestEvent) {
  const userData = await request.json();

  if (!userData.verifierId) {
    return json(
      { error: 'Missing verifierId', errorCode: 'MISSING_VERIFIER_ID' },
      { status: 400 }
    );
  }

  const result = await db.select().from(user).where(eq(user.verifierId, userData.verifierId)).limit(1);
  const userExists = result.length == 1;

  if (!userExists) {
    const value = userParse({
      name: userData.name,
      email: userData.email,
      profileImage: userData.profileImage,
      typeOfLogin: userData.typeOfLogin,
      aggregateVerifier: userData.aggregateVerifier,
      verifier: userData.verifier,
      verifierId: userData.verifierId,
    })
    await db.insert(user).values(value);
  }

  return json({ success: true });
}
