import { redirect } from '@sveltejs/kit';

export const GET = async (event) => {
  const {
    url,
    locals: { supabase }
  } = event;
  const searchParams = new URLSearchParams(url.search);
  const accessToken = searchParams.get('access_token');
  const refreshToken = searchParams.get('refresh_token');
  const providerToken = searchParams.get('provider_token');
  const expiresIn = searchParams.get('expires_in');
  const tokenType = searchParams.get('token_type');
  // console.log("Received query params:", {
  //   accessToken,
  //   refreshToken,
  //   providerToken,
  //   expiresIn,
  //   tokenType,
  // });
  if (accessToken && refreshToken) {
    const { data, error } = await supabase.auth.setSession({
      access_token: accessToken,
      refresh_token: refreshToken,
    });
    // console.log('data', data);

    if (error) {
      // console.error('Error setting session:', error);
      // TODO: we might want a custom page for this
      throw redirect(303, '/');
    }

    // TODO: we might want a custom page for this
    throw redirect(303, '/myprofile');
  } else {
    // TODO: we might want a custom page for this
    // console.error('Missing access token or refresh token');
    throw redirect(303, '/');
  }
};
