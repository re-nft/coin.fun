import { Resvg } from '@resvg/resvg-js';
import { LRUCache } from 'lru-cache';
import satori from 'satori';

import { read } from '$app/server';
import { etag } from '$lib/server/utils';

import backgroundImage from './Background_2.png';
import martianMono from './martian-mono-instance.ttf';

// TODO: we might want to hardcode the separator in a config somewhere?
const SEPARATOR = ' - ';
const CACHE = new LRUCache<string, Buffer>({ max: 100 });

const backgroundImageData = Buffer.from(
  await read(backgroundImage).arrayBuffer()
).toString('base64');

const martianMonoData = await read(martianMono).arrayBuffer();

function res(buffer: Buffer, request: Request) {
  const ETag = etag(buffer);

  return request.headers.get('if-none-match') !== ETag ?
      new Response(buffer, { headers: { 'Content-Type': 'image/png', ETag } })
    : new Response(null, { status: 304 });
}

export async function GET({ request, url }) {
  const fullTitle = url.searchParams.get('title') ?? 'coin.fun';
  const cached = CACHE.get(fullTitle);

  if (cached) return res(cached, request);

  const [title, ...parts] = fullTitle.split(SEPARATOR);
  const subtitle = parts.join(SEPARATOR);

  const svg = await satori(
    {
      type: 'div',
      props: {
        children: [
          {
            type: 'img',
            props: {
              src: `data:image/png;base64,${backgroundImageData}`,
              style: {
                position: 'absolute',
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                top: 0
              }
            }
          },
          {
            type: 'h1',
            props: {
              children: [
                {
                  type: 'span',
                  props: {
                    children: title,
                    style: {
                      color: '#E0FC7A',
                      fontSize: '1.5em'
                    }
                  }
                },
                subtitle
              ],
              style: {
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                fontSize: '2rem',
                lineHeight: '1.25',
                padding: '5%',
                position: 'relative',
                width: '45%'
              }
            }
          }
        ],
        style: {
          backgroundImage:
            'linear-gradient(to right, #111111 55%, #E0FC7A 55%, #E0FC7A)',
          color: '#FFFBDD',
          display: 'flex',
          alignItems: 'center',
          height: '100%',
          position: 'relative',
          width: '100%'
        }
      }
    },
    {
      height: 680,
      width: 1200,
      fonts: [
        {
          name: 'Martian Mono',
          data: martianMonoData,
          weight: 700,
          style: 'normal'
        }
      ]
    }
  );

  const png = new Resvg(svg).render().asPng();
  CACHE.set(fullTitle, png);

  return res(png, request);
}
