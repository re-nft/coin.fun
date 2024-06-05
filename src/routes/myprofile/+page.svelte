<script lang="ts">
  import * as Card from '$lib/components/ui/card';

  export let data;
  $: ({ session, user } = data);
</script>

<div class="myprofile-root">
  <Card.Root class="w-[350px]">
    <Card.Header>
      <Card.Title>Quest 1</Card.Title>
      <Card.Description>
        {#if user}
          Hi, {user?.user_metadata?.preferred_username}!
        {:else}
          Prove your Xness. Connect to Twitter.
        {/if}
      </Card.Description>
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
      <!-- TODO: replace with <form> -->
      {#if session}
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
