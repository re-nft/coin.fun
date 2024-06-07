<script lang="ts">
  import Quest from '$lib/components/Quest.svelte';
  import type { QuestStatus } from '$lib/quests';

  export let status: QuestStatus;
</script>

<Quest {...$$restProps} {status}>
  <div class="flex flex-col gap-4" slot="content">
    {#if status === 'done'}
      <p>Filled your bag.</p>
      <p>
        <img
          alt="Fuck you and I'll see you tomorrow."
          src="https://media1.tenor.com/m/zxgvSk50wXIAAAAC/see-you-tomorrow-fuck-you.gif"
        />
      </p>
    {:else}
      <p>Check in daily to earn, anon.</p>
    {/if}
  </div>
</Quest>
