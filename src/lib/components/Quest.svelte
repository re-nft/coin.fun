<script lang="ts">
  import * as Card from '$lib/components/ui/card';
  import type { QuestStatus } from '$lib/quests';
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
    'flex-column relative flex max-w-sm flex-col justify-between gap-4 border border-brand-yellow text-center',
    'three-d',
    className
  )}
  style="
  --color-bottom: hsl(var(--color-orange));
  --color-right: hsl(var(--color-yellow));
  "
>
  <header class="px-12 pb-8 pt-16">
    <h2
      class="text-lg font-bold leading-normal tracking-tight text-brand-beige"
    >
      {title}
    </h2>
    <p class="text-brand-yellow">
      <span
        class="absolute left-[-1px] top-[-1px] flex size-12 items-center justify-center border border-brand-yellow p-4"
        aria-label={status}>{statusIcon}</span
      >
      {points} points
    </p>
  </header>

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
