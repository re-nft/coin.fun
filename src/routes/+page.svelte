<script lang="ts">
  // import { getContext } from 'svelte';

  // import { enhance } from '$app/forms';
  // import Collapsible from '$lib/components/Collapsible.svelte';
  // import { Button } from '$lib/components/ui/button';
  // import { Buffer } from 'buffer';
  // import { type SolanaContext } from '$lib/solana';
  // import { type UserContext } from '$lib/user';

  // export let data;
  // export let form;

  // const solana = getContext<SolanaContext>('solana');
  // const user = getContext<UserContext>('user');

  // $: users = data.users;
</script>

<div>
  <!-- <p>Solana block height is {$solana?.block}</p> -->

  <!-- {#if $user.isConnected} -->
  <!--   <Button on:click={() => $user.disconnect?.()} type="button"> -->
  <!--     Disconnect -->
  <!--   </Button> -->
  <!-- {:else} -->
  <!--   <Button on:click={() => $user.connect?.()} type="button">Log In</Button> -->
  <!-- {/if} -->

  <!-- <Collapsible title="All users"> -->
  <!--   <pre>{JSON.stringify(users, null, 2)}</pre> -->
  <!-- </Collapsible> -->

  <!-- <form method="POST" use:enhance> -->
  <!--   {#if form?.errors} -->
  <!--     <ul class="list-inside list-disc text-destructive"> -->
  <!--       {#each Object.keys(form?.errors) as key} -->
  <!--         <li> -->
  <!--           {key}: {form?.errors?.[key]?.join(', ')} -->
  <!--         </li> -->
  <!--       {/each} -->
  <!--     </ul> -->
  <!--   {/if} -->
  <!---->
  <!--   <label> -->
  <!--     Name -->
  <!--     <input name="name" type="text" value={form?.data?.name ?? ''} /> -->
  <!--   </label> -->
  <!--   <label> -->
  <!--     Email -->
  <!--     <input name="email" type="email" value={form?.data?.email ?? ''} /> -->
  <!--   </label> -->
  <!--   <Button type="submit">Add</Button> -->
  <!-- </form> -->
</div>
