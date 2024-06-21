<script lang="ts">
  import Quest from '$lib/components/Quest.svelte';
  import type { QuestStatus } from '$lib/quests';
  import type { TweetSelect } from '$lib/server/db';

  export let id: string;
  export let status: QuestStatus;
  export let tweets: (TweetSelect & { points?: number })[];
</script>

<Quest {...$$restProps} {status}>
  <div class="flex flex-col gap-4" slot="content">
    {#if tweets?.length}
      {#each tweets as status (status.id)}
        <p>
          {#if status.points}
            <span class="text-brand-yellow">{status.points} points: </span>
          {/if}
          {status.fullText}
        </p>
      {/each}
    {/if}
  </div>
</Quest>
