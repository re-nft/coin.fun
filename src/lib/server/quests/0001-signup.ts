import { and, eq } from 'drizzle-orm';

import { Memoize, OnError, Quest } from '$lib/quests';
import { db, points, type Profile, profiles } from '$lib/server/db';
import { getProfile } from '$lib/server/twitter';

export class Quest0001Signup extends Quest {
  id = '0001-signup';
  component = 'Quest1';
  points = 100000;
  title = 'Quest 1: sign up';

  profile?: Profile;

  override async init() {
    if (this.userId) {
      const [profile] = await db
        .select()
        .from(profiles)
        .where(eq(profiles.id, this.userId))
        .limit(1);
      this.profile = profile;
    }

    await this.complete();
  }

  override async complete() {
    if (!this.userId) return false;

    if (await this.isCompleted()) {
      console.log(`Quest (${this.id}): already completed.`);
      return false;
    }

    const [hasPointsAllocated, hasCharacterAssignment] = await Promise.all([
      this.allocatePoints(),
      this.assignCharacter()
    ]);

    return hasPointsAllocated && hasCharacterAssignment;
  }

  override async getStatus() {
    if (!this.userId) return 'available';
    if (await this.isCompleted()) return 'done';
    return 'available';
  }

  async isCompleted() {
    if (!this.userId) return false;
    const [hasCharacterAssignment, hasPointsAllocated] = await Promise.all([
      this.hasCharacterAssignment(),
      this.hasPointsAllocated()
    ]);
    return hasCharacterAssignment && hasPointsAllocated;
  }

  @OnError(false)
  async allocatePoints() {
    if (!this.userId) return false;
    if (await this.hasPointsAllocated()) return false;
    const [result] = await db
      .insert(points)
      .values({
        points: this.points,
        questId: this.id,
        userId: this.userId
      })
      .returning();

    return Boolean(result);
  }

  @OnError(false)
  async assignCharacter() {
    if (!this.profile) return false;
    if (await this.hasCharacterAssignment()) return false;

    const { followers_count } = await getProfile(this.profile.twitterUserId);
    const characterS1 = followers_count >= 5000 ? 'heftie' : 'normie';
    const [profile] = await db
      .update(profiles)
      .set({
        characterS1
      })
      .where(eq(profiles.id, this.profile.id))
      .returning();
    this.profile = profile;
    return Boolean(profile);
  }

  @OnError(false)
  @Memoize
  async hasCharacterAssignment() {
    if (!this.userId) return false;

    const [{ characterS1 }] = await db
      .select({ characterS1: profiles.characterS1 })
      .from(profiles)
      .where(eq(profiles.id, this.userId))
      .limit(1);

    return Boolean(characterS1);
  }

  @OnError(false)
  @Memoize
  async hasPointsAllocated() {
    if (!this.userId) return false;

    const [result] = await db
      .select({ userId: points.userId })
      .from(points)
      .where(and(eq(points.userId, this.userId), eq(points.questId, this.id)))
      .limit(1);

    return Boolean(result);
  }
}
