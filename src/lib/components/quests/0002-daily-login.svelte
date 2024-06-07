<script lang="ts">
  import Quest from '$lib/components/Quest.svelte';
  import type { QuestStatus } from '$lib/quests';

  export let status: QuestStatus;
</script>

<Quest {...$$restProps} {status} title="Quest 2">
  <div class="flex flex-col gap-4" slot="content">
    {#if status === 'done'}
      <p>Thanks for loging in, anon.</p>
      <p>See you tomorrow.</p>
    {:else}
      <p>Welcome, anon.</p>
      <p>Log in daily to earn.</p>
    {/if}
  </div>
</Quest>
