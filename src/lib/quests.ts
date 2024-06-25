import type { Session, User } from '@supabase/supabase-js';

import type { Profile } from '$lib/server/db';

export type QuestStatus = 'available' | 'done' | 'error' | 'locked';

export interface QuestCallError {
  name: string;
  message: string;
}

export abstract class Quest {
  abstract id: string;
  abstract component: string;
  abstract points: number;
  abstract title: string;

  abstract complete(points?: number): Promise<boolean>;
  abstract getStatus(): Promise<QuestStatus>;

  protected profile: Profile | null;
  protected session: Session | null;
  protected user: User | null;

  publicMethods?: string[] | undefined;
  userId?: string | null;

  constructor({
    profile,
    session,
    user
  }: {
    profile: Profile | null;
    session: Session | null;
    user: User | null;
  }) {
    this.profile = profile;
    this.session = session;
    this.user = user;
    this.userId = user?.id;
  }

  init?(): Promise<void>;

  get data() {
    return this.toJSON();
  }

  get status() {
    return this.getStatus();
  }

  protected async toJSON() {
    return {
      id: this.id,
      component: this.component,
      points: this.points,
      status: await this.status,
      title: this.title
    };
  }
}

export function OnError<T>(
  // wtf why can't this be a T | ((error: unknown) => T) union
  returnOrFn?: T extends (error: unknown) => T ? (error: unknown) => T : T
) {
  return function LogErrorDecorator<C extends Quest>(
    _: C,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: unknown[]) {
      const context = this as C;
      const name = context.constructor.name;

      try {
        return originalMethod.apply(context, ...args);
      } catch (error) {
        console.log(error);
        console.error(`QuestError (${name}:${propertyKey}):`, {
          id: context.id,
          userId: context.userId
        });

        return typeof returnOrFn === 'function' ?
            returnOrFn(error)
          : returnOrFn;
      }
    };
  };
}
