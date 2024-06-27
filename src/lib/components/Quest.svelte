<script lang="ts">
  import type { QuestStatus } from '$lib/quests';
  import { fade } from 'svelte/transition';
  import { suffix } from '$lib/utils/number';
  import { cn } from '$lib/utils/ui';

  let className: string | undefined = undefined;
  let styleProps = '';

  export { className as class, styleProps as style };

  export let points: number = 0;
  export let status: QuestStatus = 'locked';
  export let title: string | undefined = undefined;

  $: statusIcon = {
    available: '❗',
    locked: '🔒',
    done: '✅',
    error: '💀'
  }[status];
</script>

<article
  class={cn(
    'flex-column relative flex max-w-sm flex-col justify-between border border-[--color] text-center',
    'three-d',
    className
  )}
  style={styleProps ||
    `
    --color: hsl(var(--color-yellow));
    --color-bottom: hsl(var(--color-orange));
    --color-right: hsl(var(--color-yellow));
  `}
>
  {#if title}
    <h2
      class="p-8 text-lg font-bold leading-normal tracking-tight text-brand-beige"
    >
      {title}
    </h2>
  {/if}

  <div
    class="order-first flex items-center gap-4 border-b border-b-[--color] text-muted-foreground"
  >
    <span
      class="flex size-12 items-center justify-center border-r border-[--color] p-4"
      aria-label={status}>{statusIcon}</span
    >
    points:
    {#if points}
      <span in:fade class="text-[--color]">{suffix(points)}</span>
    {:else}
      <span out:fade class="text-[--color]">{suffix(points)}</span>
    {/if}
  </div>

  {#if status === 'error'}
    <p>Our server borked serving this quest. Quest rugged.</p>
  {:else}
    {#if $$slots.content}
      <slot name="content" />
    {/if}
    {#if $$slots.footer}
      <footer class="p-8">
        <slot name="footer" />
      </footer>
    {/if}
  {/if}
</article>
