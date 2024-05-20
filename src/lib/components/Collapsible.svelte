<script lang="ts">
  import ChevronsDownUp from 'lucide-svelte/icons/chevrons-down-up';
  import ChevronsUpDown from 'lucide-svelte/icons/chevrons-up-down';

  import * as Collapsible from '$lib/components/ui/collapsible';

  export let title: string;
</script>

<Collapsible.Root class="my-4" let:builder>
  <Collapsible.Trigger
    class="flex items-center gap-2 p-2 transition hover:bg-zinc-200 [&[data-state=open]]:bg-black [&[data-state=open]]:text-white"
  >
    {title}
    {#if builder['data-state'] === 'open'}
      <ChevronsDownUp size={16} />
    {:else}
      <ChevronsUpDown size={16} />
    {/if}
  </Collapsible.Trigger>
  <Collapsible.Content>
    <slot />
  </Collapsible.Content>
</Collapsible.Root>
