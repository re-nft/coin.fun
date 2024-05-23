import { redirect } from '@sveltejs/kit';

export const GET = async (event) => {
  const {
    url,
    locals: { supabase }
  } = event;
  const accessToken = url.searchParams.get('accessToken') as string;
  const next = url.searchParams.get('next') ?? '/';

  // TODO: implement here persistence of user's acces token plus other log in info

  // console.log('---------- CODE -----------', code);
  // console.log('---------- next -----------', next);

  // access_token=eyJhbGciOiJIUzI1NiIsImtpZCI6InZYeFB1bzlQMTJxMlRaSFciLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzE2NDk0MDYxLCJpYXQiOjE3MTY0OTA0NjEsImlzcyI6Imh0dHBzOi8va2FzcmNuZ3dlZ3Z3Z3N2YW5iYXAuc3VwYWJhc2UuY28vYXV0aC92MSIsInN1YiI6IjJlYTQ2YzRmLWE3NjYtNDJjZi1hYjM2LWRjMjc4YmZmNGQyNiIsImVtYWlsIjoicGFyeml2YWwuaXMuc3dlZXRAZ21haWwuY29tIiwicGhvbmUiOiIiLCJhcHBfbWV0YWRhdGEiOnsicHJvdmlkZXIiOiJ0d2l0dGVyIiwicHJvdmlkZXJzIjpbInR3aXR0ZXIiXX0sInVzZXJfbWV0YWRhdGEiOnsiYXZhdGFyX3VybCI6Imh0dHBzOi8vcGJzLnR3aW1nLmNvbS9wcm9maWxlX2ltYWdlcy8xNzcxOTA2OTgxODczMjY2Njg4L1o3OGxTeWYzX25vcm1hbC5qcGciLCJlbWFpbCI6InBhcnppdmFsLmlzLnN3ZWV0QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJmdWxsX25hbWUiOiJuYXoiLCJpc3MiOiJodHRwczovL2FwaS50d2l0dGVyLmNvbS8xLjEvYWNjb3VudC92ZXJpZnlfY3JlZGVudGlhbHMuanNvbiIsIm5hbWUiOiJuYXoiLCJwaG9uZV92ZXJpZmllZCI6ZmFsc2UsInBpY3R1cmUiOiJodHRwczovL3Bicy50d2ltZy5jb20vcHJvZmlsZV9pbWFnZXMvMTc3MTkwNjk4MTg3MzI2NjY4OC9aNzhsU3lmM19ub3JtYWwuanBnIiwicHJlZmVycmVkX3VzZXJuYW1lIjoiQWxnb3JpdGhtaWNCb3QiLCJwcm92aWRlcl9pZCI6IjEwMDQwODU4OTYwNjc2NzAwMTYiLCJzdWIiOiIxMDA0MDg1ODk2MDY3NjcwMDE2IiwidXNlcl9uYW1lIjoiQWxnb3JpdGhtaWNCb3QifSwicm9sZSI6ImF1dGhlbnRpY2F0ZWQiLCJhYWwiOiJhYWwxIiwiYW1yIjpbeyJtZXRob2QiOiJvYXV0aCIsInRpbWVzdGFtcCI6MTcxNjQ5MDQ2MX1dLCJzZXNzaW9uX2lkIjoiOTFmYWFmOGEtMGRhNC00OWI5LWFiMWQtOTQ5ODExNzQ0NTU5IiwiaXNfYW5vbnltb3VzIjpmYWxzZX0.UH0GlDRb8qBeRHWZ1tYn4QZOi6No4XMzsd-eY0ADTc4
  // &expires_at=1716494061
  // &expires_in=3600
  // &provider_token=1004085896067670016-vnKOt0IL8fqh6cL0daAUYxyBnYD1u0
  // &refresh_token=8-FaIP-r46MzxWXjYJ_Ung
  // &token_type=bearer

  // if (code) {
  //   const { error } = await supabase.auth.exchangeCodeForSession(code)
  //   console.log("----------- ERRRRROR -----------", error);
  //   if (!error) {
  //     throw redirect(303, `/auth/auth-error`);
  //   }
  // }

  // TODO: this page does not exist
  // return the user to an error page with instructions
  // throw redirect(303, '/auth/auth-error');
  redirect(303, '/myprofile');
};
