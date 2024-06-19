import { and, eq } from 'drizzle-orm';

import { Memoize, QuestV2 } from '$lib/quests';
import { db, points, type Profile, profiles } from '$lib/server/db';
import { getProfile } from '$lib/server/twitter';

export class Quest0001Signup extends QuestV2 {
  id = '0001-signup';
  component = 'Quest1';
  points = 100000;
  title = 'Quest 1: sign up';

  profile?: Profile;

  override async init() {
    if (this.user?.id) {
      const [profile] = await db
        .select()
        .from(profiles)
        .where(eq(profiles.id, this.user.id))
        .limit(1);
      this.profile = profile;
    }

    await this.complete();
  }

  override async complete() {
    if (!this.user?.id) return false;

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
    if (!this.user?.id) return 'available';
    if (await this.isCompleted()) return 'done';
    return 'available';
  }

  async isCompleted() {
    if (!this.user?.id) return false;
    const [hasCharacterAssignment, hasPointsAllocated] = await Promise.all([
      this.hasCharacterAssignment(),
      this.hasPointsAllocated()
    ]);
    return hasCharacterAssignment && hasPointsAllocated;
  }

  async allocatePoints() {
    if (!this.user?.id) return false;
    if (await this.hasPointsAllocated()) return false;

    try {
      const [result] = await db
        .insert(points)
        .values({
          points: this.points,
          questId: this.id,
          userId: this.user.id
        })
        .returning();

      return Boolean(result);
    } catch (error) {
      console.error(`Could allocate points for Quest "${this.id}":`, error);
      return false;
    }
  }

  async assignCharacter() {
    if (!this.profile) return false;
    if (await this.hasCharacterAssignment()) return false;

    try {
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
    } catch (error) {
      console.error(
        `Could not assign character for Quest "${this.id}":`,
        error
      );
      return false;
    }
  }

  @Memoize
  async hasCharacterAssignment() {
    if (!this.user?.id) return false;

    try {
      const [{ characterS1 }] = await db
        .select({ characterS1: profiles.characterS1 })
        .from(profiles)
        .where(eq(profiles.id, this.user.id))
        .limit(1);

      return Boolean(characterS1);
    } catch (error) {
      console.error(
        `Could determine character assignment for Quest "${this.id}":`,
        error
      );
      return false;
    }
  }

  @Memoize
  async hasPointsAllocated() {
    if (!this.user?.id) return false;

    try {
      const [result] = await db
        .select({ userId: points.userId })
        .from(points)
        .where(
          and(eq(points.userId, this.user.id), eq(points.questId, this.id))
        )
        .limit(1);

      return Boolean(result);
    } catch (error) {
      console.error(
        `Could determine points allocation for Quest "${this.id}":`,
        error
      );
      return false;
    }
  }
}
