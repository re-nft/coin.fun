import { env } from '$env/dynamic/private';

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

export async function getProfile(id: bigint | string) {
  // For return type check
  // https://socialdata.gitbook.io/docs/twitter-users/retrieve-user-profile-details#example-response
  return fetchSocialData<{
    id: number;
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
  }>(`https://api.socialdata.tools/twitter/user/${id}`);
}
