const cacheProp = Symbol.for('__memoize_cache__');

/**
 * Evicts cached method results of keys starting with `string | string[]`.
 */
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
      const name = context.constructor.name;

      const result = originalMethod.apply(context, ...args);

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
    const name = context.constructor.name;

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
