import type { Session, User } from '@supabase/supabase-js';

export type QuestStatus = 'available' | 'done' | 'error' | 'locked';

export interface Quest<
  Id extends string = string,
  Component extends string = string
> {
  id: Id;
  component: Component;
  points: number;
  title: string;

  complete: (userId: string) => Promise<boolean>;
  getStatus: (userId?: string) => Promise<QuestStatus>;
  isAvailable?: (userId: string) => Promise<boolean>;
  isCompleted?: (userId: string) => Promise<boolean>;

  onLoad?: (userId?: string) => Promise<void>;
}

export function makeQuest<Id extends string, Component extends string>(
  quest: Quest<Id, Component>
) {
  return quest;
}

export abstract class QuestV2 {
  abstract id: string;
  abstract component: string;
  abstract points: number;
  abstract title: string;

  abstract complete(): Promise<boolean>;
  abstract getStatus(): Promise<QuestStatus>;

  protected session: Session | null;
  protected user: User | null;

  constructor({
    session,
    user
  }: {
    session: Session | null;
    user: User | null;
  }) {
    this.session = session;
    this.user = user;
  }

  init?(): Promise<void>;

  get data() {
    return this.toJSON();
  }

  get status() {
    return this.getStatus();
  }

  private async toJSON() {
    return {
      id: this.id,
      component: this.component,
      points: this.points,
      status: await this.status,
      title: this.title
    };
  }
}

const cacheProp = Symbol.for('__memoize_cache__');

/**
 * Memoizes a class method.
 */
export function Memoize(
  _: unknown,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: unknown[]) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-this-alias
    const context: any = this;
    const name = this.constructor.name;

    if (!context[cacheProp]) {
      context[cacheProp] = new Map<string, unknown>();
    }

    const cache: Map<string, unknown> = context[cacheProp];
    const key = `${propertyKey}(${args.map((arg) => String(arg)).join()})`;
    const cached = cache.get(key);

    if (cached) {
      console.debug(`Cache HIT: ${name}:${key}`);
      return cached;
    }

    console.debug(`Cache MISS: ${name}:${key}`);
    const result = originalMethod.apply(context, ...args);
    cache.set(key, result);
    return result;
  };
}

export function Evict(keyOrKeys: string | string[]) {
  const keys = Array.isArray(keyOrKeys) ? keyOrKeys : [keyOrKeys];
  const keysRe = new RegExp(`^(${keys.join('|')})`);

  return function EvictDecorator(
    _: unknown,
    _propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: unknown[]) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-this-alias
      const context: any = this;
      const name = this.constructor.name;

      const result = originalMethod.apply(this, ...args);

      if (!context[cacheProp]) {
        console.debug(`Cache NOEVICT: no cache for ${name}`);
        return result;
      }

      const cache: Map<string, unknown> = context[cacheProp];

      cache.forEach((_, key, cache) => {
        if (!keysRe.test(key)) return;
        console.debug(`Cache EVICT: ${name}:${key}`);
        cache.delete(key);
      });

      return result;
    };
  };
}
