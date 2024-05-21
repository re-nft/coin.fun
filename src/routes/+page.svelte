<script lang="ts">
  import { getContext } from 'svelte';

  import { enhance } from '$app/forms';
  import Collapsible from '$lib/components/Collapsible.svelte';
  import { Button } from '$lib/components/ui/button';
  import { Buffer } from 'buffer';
  import { type SolanaContext } from '$lib/solana';
  import { type UserContext } from '$lib/user';

  export let data;
  export let form;

  const solana = getContext<SolanaContext>('solana');
  const user = getContext<UserContext>('user');

  $: url = data.url;
  $: users = data.users;
</script>

<div>
  <p>You are on: {url}</p>
  <p>Solana block height is {$solana?.block}</p>

  <Collapsible title="User details">
    <pre>{JSON.stringify($user, null, 2)}</pre>
  </Collapsible>

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
          // console.log({ result: Buffer.from(result).toString('hex') });
        }}
        type="button">Sign Message</Button
      >
    </p>
  {/if}

  {#if !$user.isConnected}
    <Button on:click={() => $user?.connect?.()} type="button">Web3Auth</Button>
  {:else}
    <Button on:click={() => $user?.disconnect?.()} type="button">
      Disconnect
    </Button>
  {/if}

  <p>
    Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
  </p>

  <Collapsible title="All users">
    <pre>{JSON.stringify(users, null, 2)}</pre>
  </Collapsible>

  <form method="POST" use:enhance>
    {#if form?.errors}
      <ul class="list-inside list-disc text-destructive">
        {#each Object.keys(form?.errors) as key}
          <li>
            {key}: {form?.errors?.[key]?.join(', ')}
          </li>
        {/each}
      </ul>
    {/if}

    <label>
      Name
      <input name="name" type="text" value={form?.data?.name ?? ''} />
    </label>
    <label>
      Email
      <input name="email" type="email" value={form?.data?.email ?? ''} />
    </label>
    <Button type="submit">Add</Button>
  </form>
</div>
