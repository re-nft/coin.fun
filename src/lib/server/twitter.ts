import { env } from '$env/dynamic/private';

export interface TwitterUser {
  id_str: string;
  name: string;
  screen_name: string;
  location: string | null;
  url: string | null;
  description: string;
  protected: boolean;
  verified: boolean;
  followers_count: number;
  friends_count: number;
  listed_count: number;
  favourites_count: number;
  statuses_count: number;
  created_at: string;
  profile_banner_url: string | null;
  profile_image_url_https: string | null;
  can_dm: boolean | null;
}

// WARN: This is a partial twitter status struct containing fields
// which are relevant to us.
export interface TwitterStatus {
  id_str: string;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  entities: any;
  full_text: string;
  tweet_created_at: string;

  in_reply_to_status_id_str: string | null;
  quoted_status: TwitterStatus | null;
  retweeted_status: TwitterStatus | null;

  favourite_count: number;
  quote_count: number;
  reply_count: number;
  retweet_count: number;

  user: TwitterUser;
}

const QUOTE_TWEETS_MAX_QUERY_CHARS = 456;

export async function fetchSocialData<T>(
  input: string | URL | Request,
  init?: RequestInit | undefined
) {
  const options = {
    ...init,
    headers: {
      ...init?.headers,
      Accept: 'application/json',
      Authorization: `Bearer ${env.SOCIALDATA_API_KEY}`
    }
  };

  let res: Response;

  try {
    console.debug(`SocialData: fetching ${input}`);
    res = await fetch(input, options);
  } catch (error) {
    // @ts-expect-error this is fine
    throw new Error(`Network error: ${error?.message}`);
  }

  if (!res.ok)
    throw new Error(`Request failed (${res.status}): ${res.statusText}`);

  const contentType = res.headers.get('Content-Type');

  let data: T;

  try {
    data =
      contentType && contentType.includes('application/json') ?
        await res.json()
      : await res.text();
  } catch (error) {
    // @ts-expect-error this is fine
    throw new Error(`Failed to parse response: ${error?.message}`);
  }

  return data;
}

export async function getSearch(
  search: string,
  { maxId, minId }: { maxId?: string; minId?: string } = {}
) {
  let maxQuery = maxId ? ` max_id:${maxId}` : '';
  const minQuery = minId ? ` since_id:${minId}` : '';

  let query = search + maxQuery + minQuery;

  const searchUrl = new URL('https://api.socialdata.tools/twitter/search');
  searchUrl.searchParams.set('type', 'Latest');
  searchUrl.searchParams.set('query', query);

  const result: TwitterStatus[] = [];

  let prevMaxId = '';
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const res = await fetchSocialData<{
      next_cursor: string;
      tweets: TwitterStatus[];
    }>(searchUrl);

    // We use two techniques to paginate over tweets because `cursor`
    // is inconsistent at times, yielding no new pages while there are
    // actually still relevant tweets.
    if (res.next_cursor) searchUrl.searchParams.set('cursor', res.next_cursor);
    // If there's no `next_cursor` we'll delete that parameter and grab
    // the last returned tweet id and paginate using that.
    else {
      const nextMaxId = res.tweets.at(-1)?.id_str;

      // We're assuming that paging through results is done after we stop
      // receiving any tweets. In this case `nextMaxId` will be `undefined`.
      // Another exit case is when we're using the same `max_id` again.
      if (!nextMaxId || prevMaxId === nextMaxId) break;

      prevMaxId = nextMaxId;
      maxQuery = nextMaxId ? ` max_id:${nextMaxId}` : '';
      query = search + maxQuery + minQuery;

      searchUrl.searchParams.delete('cursor');
      searchUrl.searchParams.set('query', query);
    }

    for (const status of res.tweets) result.push(status);
  }

  return result;
}

export async function getQuoted(
  tweets: TwitterStatus[],
  { maxId, minId }: { maxId?: string; minId?: string } = {}
) {
  const ids = tweets.reduce<string[]>((ids, status) => {
    // Only add a pointer when we have a tweet that's been quoted.
    if (status.quote_count) {
      ids.push(status.id_str);
    }
    return ids;
  }, []);

  // Create batches of search requests for quoted_tweet_id:[id] so
  // it doens't make the query parameter larger than 457 chars which
  // equates to `512 - ' since_id:[id] max_id:[id]'.length. See:
  // https://developer.x.com/en/docs/twitter-api/tweets/search/integrate/build-a-query#limits
  // This should allow us to process 12 tweets per request while
  // still being able to tack on the poor-man's pagination.
  const queries = ids.reduce<string[]>((queries, id) => {
    const prevStr = queries.at(-1) ?? '';
    const currStr = `quoted_tweet_id:${id}`;
    const nextStr = `${prevStr} ${currStr}`;

    if (nextStr.length > QUOTE_TWEETS_MAX_QUERY_CHARS) {
      queries.push(currStr);
    } else {
      queries[queries.length - 1] = nextStr;
    }

    return queries;
  }, []);

  const result: TwitterStatus[] = [];

  for (const results of await Promise.all(
    queries.map((query) => getSearch(query, { maxId, minId }))
  ))
    for (const status of results) result.push(status);

  return result;
}

export async function getProfile(id: string) {
  // For return type check
  // https://socialdata.gitbook.io/docs/twitter-users/retrieve-user-profile-details#example-response
  return fetchSocialData<TwitterUser>(
    `https://api.socialdata.tools/twitter/user/${id}`
  );
}
