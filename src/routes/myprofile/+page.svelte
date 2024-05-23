<script lang="ts">
  import { getContext } from 'svelte';

  import Collapsible from '$lib/components/Collapsible.svelte';
  import { Button } from '$lib/components/ui/button';
  import { Buffer } from 'buffer';
  import { type UserContext } from '$lib/user';

  const user = getContext<UserContext>('user');
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
