<script lang="ts">
  import { cn } from '$lib/utils/ui';

  export let progression: number = 0;
</script>

<div
  class={cn('flex items-center justify-end gap-1', {
    'text-brand-green': progression > 0,
    'text-brand-red': progression < 0
  })}
>
  {#if progression > 0}
    <i
      class="mt-0.5 h-0 w-0 border-b-[7px] border-l-[5px] border-r-[5px] border-b-brand-green border-l-transparent border-r-transparent"
    />
  {:else if progression < 0}
    <i
      class="mt-0.5 h-0 w-0 border-l-[5px] border-r-[5px] border-t-[7px] border-l-transparent border-r-transparent border-t-brand-red"
    />
  {/if}
  <span>{Math.abs(progression)}</span>
</div>
