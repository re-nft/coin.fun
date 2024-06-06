<script lang="ts">
  import Points from '$lib/components/Points.svelte';
  import Quest from '$lib/components/Quest.svelte';
  import { Button } from '$lib/components/ui/button';

  export let data;
  $: ({ session, userData } = data);
</script>

<div class="myprofile-root">
  <div class="my-20 flex justify-center">
    <Points />
  </div>

  <Quest status={userData ? 'done' : 'unlocked'} title="Quest 1">
    <svelte:fragment slot="description">1000 points</svelte:fragment>

    <div class="flex flex-col gap-4" slot="content">
      {#if userData}
        <p>
          Hi, <a href={`https://x.com/${userData.userName}`}>
            <img
              alt=""
              class="inline size-8 rounded-full align-middle"
              src={userData.avatar}
            />
            @{userData.userName}</a
          >!
        </p>
        <p>Nice to see you connected.</p>
      {:else}
        Prove your Xness. Connect to Twitter.
      {/if}
    </div>

    <svelte:fragment slot="footer">
      {#if session}
        <Button href="/api/twitter/sign-out">Sign Out</Button>
      {:else}
        <Button href="/api/twitter/sign-in">Sign In</Button>
      {/if}
    </svelte:fragment>
  </Quest>

  <!-- <Quest status={userData ? 'unlocked' : 'locked'} title="Quest 2"> -->
  <!--   <svelte:fragment slot="description">1000 points</svelte:fragment> -->
  <!---->
  <!--   <svelte:fragment slot="content"> -->
  <!--     To join the fray you need a wallet. Either connect your Solana wallet or -->
  <!--     create one using a social login. -->
  <!--   </svelte:fragment> -->
  <!---->
  <!--   <svelte:fragment slot="footer"> -->
  <!--     <Button -->
  <!--       class={cn(!userData && 'disabled')} -->
  <!--       on:click={() => $user?.connect?.()} -->
  <!--       type="button" -->
  <!--     > -->
  <!--       Connect -->
  <!--     </Button> -->
  <!--   </svelte:fragment> -->
  <!-- </Quest> -->
</div>

<p class="glow text-center text-3xl">
  .<br />
  .<br />
  .<br />
  .<br />
  .<br />
  .<br />
  .<br />
  .<br /><br />
  MORE QUESTS COMING SOON
</p>

<style>
  .myprofile-root {
    padding: 2em;
  }
</style>
