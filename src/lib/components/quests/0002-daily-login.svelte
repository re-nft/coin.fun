<script lang="ts">
  import Quest from '$lib/components/Quest.svelte';
  import { SpinningWheel } from '$lib/components/ui/spinning-wheel';
  import type { QuestStatus } from '$lib/quests';

  export let id: string;
  export let status: QuestStatus;

  let submitting = false;
</script>

<Quest {...$$restProps} {status}>
  <div class="flex flex-col gap-4" slot="content">
    <SpinningWheel />
    {#if status === 'done'}
      <p>Filled your bag.</p>
      <p>
        <img
          alt="Fuck you and I'll see you tomorrow."
          src="https://media1.tenor.com/m/zxgvSk50wXIAAAAC/see-you-tomorrow-fuck-you.gif"
        />
      </p>
    {:else if status === 'available'}
      <p>Gib points?</p>
      <form
        action="/api/quests?/call"
        method="POST"
        use:enhance={() => {
          submitting = true;
          return async ({ update }) => {
            await update();
            submitting = false;
          };
        }}
      >
        <input name="questId" type="hidden" value={id} />
        <input name="methodName" type="hidden" value="complete" />
        <Button
          class="text-2xl font-bold"
          disabled={submitting}
          size="lg"
          type="submit"
        >
          {#if submitting}
            <span class="animate-spin">🥳</span>
          {:else}Gib{/if}
        </Button>
      </form>
    {:else}
      <p>Check in daily to earn, anon.</p>
    {/if}
  </div>
</Quest>
