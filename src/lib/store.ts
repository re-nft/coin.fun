import {
  type Invalidator,
  type Subscriber,
  type Unsubscriber,
  type Updater,
  writable
} from 'svelte/store';

export function persisted<T>(
  name: string,
  initialValue?: T,
  options?: {
    enabled?: boolean;
    prefix?: string;
    storage?: Storage;
    serialize?: (value: T) => string;
    deserialize?: (value: string) => T;
  }
) {
  const {
    enabled = Boolean('localStorage' in globalThis),
    prefix = 'store:',
    storage = globalThis.localStorage,
    serialize = JSON.stringify,
    deserialize = JSON.parse
  } = options ?? {};

  const key = `${prefix}${name}`;

  if (!enabled) {
    console.warn(`persistable "${key}" disabled.`);
    return writable(initialValue);
  }

  function persist(value?: T) {
    try {
      storage.setItem(key, serialize(value));
    } catch (error) {
      console.error(`PersistError: ${key}`, error);
    }
  }

  function retrieve() {
    try {
      return deserialize(storage.getItem(key) ?? 'null');
    } catch (error) {
      console.error(`RetrieveError: ${key}`, error);
    }
  }

  const { set, subscribe, update } = writable(retrieve() ?? initialValue);

  return {
    set(value: T) {
      persist(value);
      set(value);
    },

    subscribe(
      run: Subscriber<T>,
      invalidate?: Invalidator<T> | undefined
    ): Unsubscriber {
      return subscribe((value) => {
        run(retrieve() ?? value);
      }, invalidate);
    },

    update(updater: Updater<T>) {
      update((value) => {
        const nextValue = updater(value);
        persist(nextValue);
        return nextValue;
      });
    }
  };
}
