<script lang="ts">
  import { getContext } from 'svelte';

  import * as Card from '$lib/components/ui/card';
  import { type UserContext } from '$lib/user';

  export let data;
  console.log('myprofile data', data);
  const user = getContext<UserContext>('user');
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
      {#if $user?.user}
        <a href="/api/twitter/sign-out">Sign out</a>
      {:else}
        <a href="/api/twitter/sign-in">Sign In</a>
      {/if}
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
