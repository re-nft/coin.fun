<script lang="ts">
  import { getContext } from 'svelte';
  import {
    PUBLIC_SUPABASE_PROJECT_ID,
    PUBLIC_SUPABASE_ANON_KEY
  } from '$env/static/public';

  import Collapsible from '$lib/components/Collapsible.svelte';
  import { Button } from '$lib/components/ui/button';
  import { Buffer } from 'buffer';
  import { type UserContext } from '$lib/user';
  import { createClient, type Session } from '@supabase/supabase-js';
  import { onMount } from 'svelte';

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

<!-- <div> -->
<!--   <h1>my profile</h1> -->
<!-- </div> -->

<!-- <div class="max-w-lg"> -->
<!--   <Collapsible title="User details"> -->
<!--     <div -->
<!--       class="scrollbar-visible h-48 w-auto overflow-auto overflow-x-auto border" -->
<!--     > -->
<!--       <pre class="text-xs">{JSON.stringify($user, null, 2)}</pre> -->
<!--     </div> -->
<!--   </Collapsible> -->
<!-- </div> -->

<!-- {#if $user?.wallet} -->
<!--   {#await $user?.wallet.requestAccounts() then accounts} -->
<!--     Accounts: {accounts.join(', ')} -->
<!--   {/await} -->
<!---->
<!--   <p> -->
<!--     Sign message: <Button -->
<!--       on:click={async () => { -->
<!--         const msg = Buffer.from('Test Signing Message ', 'utf8'); -->
<!--         const result = await $user?.wallet?.signMessage(msg); -->
<!--         if (!result) return console.error(`No result: ${result}.`); -->
<!--       }} -->
<!--       type="button">Sign Message</Button -->
<!--     > -->
<!--   </p> -->
<!-- {/if} -->

<h1>Quest 1: 1000 points</h1>
{#if !session}
  <Button type="button" on:click={signInWithTwitterSupabaseSession}
    >Connect Twitter</Button
  >
{:else}
  <Button type="button" on:click={signOutSupabaseSession}
    >Sign Out From Twitter</Button
  >
{/if}
