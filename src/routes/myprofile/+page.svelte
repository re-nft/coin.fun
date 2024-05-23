<script lang="ts">
  import { getContext } from 'svelte';

  import Collapsible from '$lib/components/Collapsible.svelte';
  import { Button } from '$lib/components/ui/button';
  import { Buffer } from 'buffer';
  import { type UserContext, handleConnectTwitter } from '$lib/user';

  const user = getContext<UserContext>('user');

  // one of the quests to earn points is to connect your twitter account
  // we are likely to get a ton of bots
  // if it comes to that, it will be a good problem to solve

  // TODO: should not be able to navigate to this page if you are not logged in
  // just give text that says: you should log in first
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
<Button type="button" on:click={handleConnectTwitter}>Connect Twitter</Button>
