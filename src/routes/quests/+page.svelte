<script lang="ts">
  import Points from '$lib/components/Points.svelte';
  import Quest from '$lib/components/Quest.svelte';
  import * as QuestComponents from '$lib/components/quests';

  export let data;
  $: ({ quests, userData: _, userPoints } = data);
</script>

<div class="myprofile-root">
  <div class="my-20 flex justify-center">
    <Points points={userPoints} />
  </div>

  {#if quests}
    {#each quests as quest (quest.id)}
      <svelte:component
        this={quest.component in QuestComponents ?
          QuestComponents[quest.component]
        : Quest}
        {...quest}
      />
    {/each}
  {/if}
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
