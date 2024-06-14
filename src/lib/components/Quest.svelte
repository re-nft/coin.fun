<script lang="ts">
  import type { QuestStatus } from '$lib/quests';
  import { suffix } from '$lib/utils/number';
  import { cn } from '$lib/utils/ui';

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

<article
  class={cn(
    'flex-column relative flex max-w-sm flex-col justify-between border border-[--color-right] text-center',
    'three-d',
    className
  )}
  style="
    --color: hsl(var(--color-yellow));
    --color-bottom: hsl(var(--color-orange));
    --color-right: hsl(var(--color-yellow));
  "
>
  <h2
    class="p-8 text-lg font-bold leading-normal tracking-tight text-brand-beige"
  >
    {title}
  </h2>

  <p
    class="order-first flex items-center gap-4 border-b border-b-[--color] text-muted-foreground"
  >
    <span
      class="flex size-12 items-center justify-center border-r border-[--color] p-4"
      aria-label={status}>{statusIcon}</span
    >
    points:
    <span class="text-[--color]">{suffix(points)}</span>
  </p>

  {#if status === 'error'}
    <p>Our server borked serving this quest. Quest rugged.</p>
  {:else}
    {#if $$slots.content}
      <div class="p-8">
        <slot name="content" />
      </div>
    {/if}
    {#if $$slots.footer}
      <footer class="p-8">
        <slot name="footer" />
      </footer>
    {/if}
  {/if}
</article>
