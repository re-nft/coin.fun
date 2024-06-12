import { Resvg } from '@resvg/resvg-js';
import satori from 'satori';

import { read } from '$app/server';

import backgroundImage from './Background_2.png';
import martianMono from './martian-mono-instance.ttf';

const backgroundImageData = Buffer.from(
  await read(backgroundImage).arrayBuffer()
).toString('base64');
const martianMonoData = await read(martianMono).arrayBuffer();

const SEPARATOR = ' - ';

export async function GET({ url }) {
  const fullTitle = url.searchParams.get('title') ?? 'coin.fun';
  const [title, ...parts] = fullTitle.split(SEPARATOR);
  const rest = parts.join(SEPARATOR);

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
                rest
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

  return new Response(png, {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'no-store'
    }
  });
}
