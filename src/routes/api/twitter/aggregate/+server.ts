import { env } from '$env/dynamic/private';

export async function POST({ request }) {
  if (!env.SOCIALDATA_API_KEY)
    return new Response('No "SOCIALDATA_API_KEY" found.', { status: 401 });

  const searchUrl = new URL('https://api.socialdata.tools/twitter/search');
  searchUrl.searchParams.set('type', 'Latest');

  // 1. First pass gets all tweets mentioning @coindotfun, but not from
  //    @coindotfun. We include replies because tweets starting with
  //    @coindotfun will be marked as a reply in the twitter search API even
  //    when there's no specific tweet being relpied to.
  searchUrl.searchParams.set('query', '(@coindotfun) -from:coindotfun');
  const res = await fetch(searchUrl, {
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${env.SOCIALDATA_API_KEY}`
    }
  });

  console.log(JSON.stringify(await res.json()));

  return new Response(null, { status: 204 });
}
