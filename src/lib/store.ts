import {
  type Invalidator,
  type Subscriber,
  type Unsubscriber,
  type Updater,
  writable
} from 'svelte/store';

/**
 * Creates a `writable` svelte store which synchronizes with a `Storage`.
 * By default this is `window.localStorage`. If `options.storage` is
 * unavailable fall back to a regular in-memory `writable`.
 */
export function persisted<T>(
  /** The name of the store. Storage key will become `[prefix]:[name]`. */
  name: string,
  /** Initial store value. */
  initialValue?: T,
  /** Storage configuration options. */
  options?: {
    /** Prefix used for Storage keys. */
    prefix?: string;
    /** An object adhering to the `Storage` interface. */
    storage?: Storage;
    /** Takes a `value` T and serializes to `string`. */
    serialize?: (value: T) => string;
    /** Takes a `string` and serializes to T. */
    deserialize?: (str: string) => T;
  }
) {
  const {
    prefix = 'store:',
    storage = globalThis?.localStorage,
    serialize = JSON.stringify,
    deserialize = JSON.parse
  } = options ?? {};

  const key = `${prefix}${name}`;

  if (!storage) {
    console.warn(
      `persistable "${key}" disabled. Storage "${storage}" not found.`
    );
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
