<script lang="ts">
  import PageMeta from '$lib/components/PageMeta.svelte';
  import Points from '$lib/components/Points.svelte';
  import Quest from '$lib/components/Quest.svelte';
  import * as QuestComponents from '$lib/components/quests';

  export let data;
  $: ({ quests, userData: _, userPoints } = data);
</script>

<PageMeta
  title="Quests - Moon missions & reketed adventures!"
  description="Ready to get rekt or go to the moon? Take on degen quests, crush challenges, and print memecoins like a madlad."
  keywords="degen quests, print memecoins, crypto challenges, $COIN rewards, community owned crypto fun"
/>

<div class="my-20 flex justify-center">
  <Points points={userPoints} />
</div>

<div class="flex flex-wrap justify-center gap-8">
  {#if quests}
    {#each quests as quest (quest.id)}
      <svelte:component
        this={quest.component in QuestComponents ?
          QuestComponents[quest.component]
        : Quest}
        class="min-w-[240px] flex-1"
        {...quest}
      />
    {/each}
  {/if}
</div>

<p class="text-glow text-center text-3xl">
  .<br />
  .<br />
  .<br />
  .<br />
  .<br />
  .<br />
  .<br />
  .<br /><br />
</p>
