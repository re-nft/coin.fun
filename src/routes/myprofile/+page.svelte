<script lang="ts">
  import { getContext } from 'svelte';
  import {
    PUBLIC_SUPABASE_PROJECT_ID,
    PUBLIC_SUPABASE_ANON_KEY
  } from '$env/static/public';

  import { Button } from '$lib/components/ui/button';
  import { type UserContext } from '$lib/user';
  import { createClient, type Session } from '@supabase/supabase-js';
  import { onMount } from 'svelte';
  import * as Card from '$lib/components/ui/card';

  const user = getContext<UserContext>('user');

  let session: Session | undefined;

  // serves 2 purposes
  // 1. Supabase redirects to this url (defined in sign in to twitter function
  // in this very same component), but rather than using query params, it uses
  // hash params. Unfortunately, that means we need to turn these into query
  // params and send server-side. Then server-side starts a server-side
  // twitter oauth session
  // 2. If we have already went through 1., then we ask server side to provide
  // us with current session. If we haven't went through 1., then we obviously
  // don't get anything in this step.
  onMount(async () => {
    const hashParams = new URLSearchParams(window.location.hash.substring(1));
    const accessToken = hashParams.get('access_token');
    const refreshToken = hashParams.get('refresh_token');

    // if there are hash params, then this must be a callback from supabase
    // with twitter oauth params
    if (accessToken && refreshToken) {
      const params = new URLSearchParams(hashParams);
      window.location.href = `/api/twitter/callback?${params.toString()}`;
      // else we need to pull the session from server side (if it exists)
    } else {
      try {
        const response = await fetch('/api/twitter/get-session');
        const result = await response.json();

        if (response.ok) {
          session = result.session;
          console.log('session retrieved:', session);
        } else {
          console.error('failed to retrieve session:', result.error);
        }
      } catch (error) {
        console.error('error fetching session:', error);
      }
    }
  });

  // one of the quests to earn points is to connect your twitter account
  // we are likely to get a ton of bots
  // if it comes to that, it will be a good problem to solve

  // TODO: should not be able to navigate to this page if you are not logged in
  // just give text that says: you should log in first

  // TODO: probably will use supabase client in other places
  // should the client be a store?
  // TODO: we also have instance of supabace in locals, do we need it there as well
  // or can it be used here?
  const supabase = createClient(
    `https://${PUBLIC_SUPABASE_PROJECT_ID}.supabase.co`,
    PUBLIC_SUPABASE_ANON_KEY
  );

  // TODO: only sign in to twitter if we are connected via methods other than
  // X in web3auth
  async function signInWithTwitterSupabaseSession() {
    const redirectTo = `${window.location.origin}/myprofile`;
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'twitter',
      options: {
        redirectTo
      }
    });

    if (error) {
      // console.error('authentication error:', error);
      return;
    }

    return data;
  }

  async function signOutSupabaseSession() {
    try {
      const response = await fetch('/api/twitter/sign-out', {
        method: 'POST'
      });

      const result = await response.json();

      if (response.ok) {
        console.log('Successfully signed out:', result.message);
        // can only sign them out if they are supabase signed in
        // meaning `session` variable in here is not null
        window.location.href = '/myprofile';
      } else {
        console.error('Failed to sign out:', result.error);
      }
    } catch (error) {
      console.error('Error during sign out:', error);
    }
  }
</script>

<div class="myprofile-root">
  <Card.Root class="w-[350px]">
    <Card.Header>
      <Card.Title>Quest 1</Card.Title>
      <Card.Description>Prove your Xness. Connect to Twitter.</Card.Description>
    </Card.Header>
    <Card.Content>
      <form>
        <div class="grid w-full items-center gap-4">
          <!-- <div class="flex flex-col space-y-1.5"> -->
          <!--   <Label for="name">Name</Label> -->
          <!--   <Input id="name" placeholder="Name of your project" /> -->
          <!-- </div> -->
          <!-- <div class="flex flex-col space-y-1.5"> -->
          <!--   <Label for="framework">Framework</Label> -->
          <!-- </div> -->
        </div>
      </form>
    </Card.Content>
    <Card.Footer class="flex justify-between">
      {#if session}<Button
          variant="outline"
          type="button"
          on:click={signOutSupabaseSession}>Sign Out</Button
        >{/if}
      {#if !session}<Button
          type="button"
          on:click={signInWithTwitterSupabaseSession}>Sign In</Button
        >{/if}
    </Card.Footer>
  </Card.Root>
</div>

<!-- <h1>Quest 1: 1000 points</h1> -->
<!-- {#if !session} -->
<!--   <Button type="button" on:click={signInWithTwitterSupabaseSession} -->
<!--     >Connect Twitter</Button -->
<!--   > -->
<!-- {:else} -->
<!--   <Button type="button" on:click={signOutSupabaseSession} -->
<!--     >Sign Out From Twitter</Button -->
<!--   > -->
<!-- {/if} -->

<style>
  .myprofile-root {
    padding: 2em;
  }
</style>
