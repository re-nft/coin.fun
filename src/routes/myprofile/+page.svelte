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
  import { createClient } from '@supabase/supabase-js';

  const user = getContext<UserContext>('user');

  // one of the quests to earn points is to connect your twitter account
  // we are likely to get a ton of bots
  // if it comes to that, it will be a good problem to solve

  // TODO: should not be able to navigate to this page if you are not logged in
  // just give text that says: you should log in first

  // TODO: probably will use supabase client in other places
  // should the client be a store?
  const supabase = createClient(
    `https://${PUBLIC_SUPABASE_PROJECT_ID}.supabase.co`,
    PUBLIC_SUPABASE_ANON_KEY
  );

  async function signInWithTwitter() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'twitter',
      // options: {
      //   redirectTo: 'http://localhost:3000/myprofile'
      // }
    });

    if (error) {
      // console.error('authentication error:', error);
      return;
    }

    return data;
  }

  async function signOutWithTwitter() {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('error signing out of twitter', error);
      return;
    }
    console.log('twitter sign out success');
  }
</script>

<div>
  <h1>my profile</h1>
</div>

<div class="max-w-lg">
  <Collapsible title="User details">
    <div
      class="scrollbar-visible h-48 w-auto overflow-auto overflow-x-auto border"
    >
      <pre class="text-xs">{JSON.stringify($user, null, 2)}</pre>
    </div>
  </Collapsible>
</div>

{#if $user?.wallet}
  {#await $user?.wallet.requestAccounts() then accounts}
    Accounts: {accounts.join(', ')}
  {/await}

  <p>
    Sign message: <Button
      on:click={async () => {
        const msg = Buffer.from('Test Signing Message ', 'utf8');
        const result = await $user?.wallet?.signMessage(msg);
        if (!result) return console.error(`No result: ${result}.`);
      }}
      type="button">Sign Message</Button
    >
  </p>
{/if}

<h1>Quest 1: 1000 points</h1>
<Button type="button" on:click={signInWithTwitter}>Connect Twitter</Button>
<Button type="button" on:click={signOutWithTwitter}
  >Sign Out From Twitter</Button
>
