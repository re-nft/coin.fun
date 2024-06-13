import { createHash } from 'node:crypto';

// Literally taken from the `etag` npm package. See:
// https://github.com/jshttp/etag/blob/master/index.js#L39
export function etag(entity: Buffer | string) {
  const hash = createHash('sha1')
    // @ts-expect-error the second argument is dropped if we pass a Buffer.
    .update(entity, 'utf8')
    .digest('base64')
    .substring(0, 27);

  const length =
    typeof entity === 'string' ?
      Buffer.byteLength(entity, 'utf8')
    : entity.length;

  return `"${length.toString(16)}-${hash}"`;
}
