<script lang="ts">
  import { Toggle } from 'bits-ui';
  import MenuIcon from 'lucide-svelte/icons/menu';
  import CloseIcon from 'lucide-svelte/icons/x';

  import { beforeNavigate } from '$app/navigation';
  import { page } from '$app/stores';
  import { cn } from '$lib/utils/ui';

  const pages = {
    'earn $COIN': '/tokenomics',
    'quests': '/quests',
    'leaderboard': '/leaderboard'
  };

  let open = false;

  beforeNavigate(() => {
    open = false;
  });
</script>

<div class="relative z-[1] text-brand-black">
  <nav class="flex items-stretch justify-between bg-brand-orange">
    <a href="/">Coin.fun</a>

    <Toggle.Root
      bind:pressed={open}
      class="p-4 transition data-[state=on]:rotate-180 sm:hidden"
    >
      <svelte:component this={open ? CloseIcon : MenuIcon} />
    </Toggle.Root>

    <div
      class={cn(
        'flex items-center justify-center bg-brand-orange transition max-sm:absolute max-sm:left-0 max-sm:right-0 max-sm:top-full max-sm:z-[-1] max-sm:flex-col max-sm:p-8',
        open ? 'max-sm:translate-y-0' : 'max-sm:-translate-y-full'
      )}
    >
      {#each Object.entries(pages) as [label, href]}
        <a {href} class:active={$page.url.pathname.startsWith(href)}>{label}</a>
      {/each}
    </div>
  </nav>
</div>

<style lang="postcss">
  a {
    @apply p-4 transition hover:bg-brand-green;

    &.active {
      @apply bg-brand-orange-light;
    }
  }
</style>
