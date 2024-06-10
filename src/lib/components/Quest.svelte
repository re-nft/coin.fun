<script lang="ts">
  import * as Card from '$lib/components/ui/card';
  import type { QuestStatus } from '$lib/quests';

  let className: string | undefined = undefined;
  export { className as class };
  export let title: string | undefined = undefined;
  export let status: QuestStatus = 'locked';
  export let points: number = 0;

  const statusIcon = {
    available: '❗',
    locked: '🔒',
    done: '✅',
    error: '💀'
  }[status];
</script>

<Card.Root class={className}>
  <Card.Header>
    <Card.Title>{statusIcon} {title}</Card.Title>
    <Card.Description>{points} points</Card.Description>
  </Card.Header>
  {#if status === 'error'}
    <Card.Content
      >Our server borked serving this quest. Quest rugged.</Card.Content
    >
  {:else}
    {#if $$slots.content}
      <Card.Content>
        <slot name="content" />
      </Card.Content>
    {/if}
    {#if $$slots.footer}
      <Card.Footer class="flex justify-between">
        <slot name="footer" />
      </Card.Footer>
    {/if}
  {/if}
</Card.Root>
