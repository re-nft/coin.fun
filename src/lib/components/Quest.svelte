<script lang="ts">
  import * as Card from '$lib/components/ui/card';

  export { className as class };
  export let title: string | undefined = undefined;
  export let status: 'locked' | 'unlocked' | 'done' = 'locked';

  const statusIcon = {
    locked: '🔒',
    unlocked: '❗',
    done: '✅'
  }[status];
</script>

<Card.Root class="w-[350px]">
  <Card.Header>
    <Card.Title>{statusIcon} {title}</Card.Title>
    {#if $$slots.description}
      <Card.Description>
        <slot name="description" />
      </Card.Description>
    {/if}
  </Card.Header>
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
</Card.Root>
