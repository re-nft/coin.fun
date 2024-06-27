<script lang="ts">
  import { Toggle } from 'bits-ui';
  import MenuIcon from 'lucide-svelte/icons/menu';
  import CloseIcon from 'lucide-svelte/icons/x';

  import { beforeNavigate } from '$app/navigation';
  import { page } from '$app/stores';
  import { cn } from '$lib/utils/ui';

  const pages = {
    'new COIN': '/new',
    'earn $COIN': '/tokenomics',
    'quests': '/quests',
    'leaderboard': '/leaderboard'
  };

  let open = false;

  beforeNavigate(() => {
    open = false;
  });
</script>

<nav class="sticky top-0 z-[1] text-brand-beige">
  <div
    class="flex items-center justify-between border-b border-b-brand-yellow bg-brand-black"
  >
    <a class="group flex items-center gap-[0.5ch]" href="/">
      <img
        alt=""
        class="size-8 group-hover:animate-wiggle"
        role="presentation"
        src="/logo.svg"
      />
      coin.fun
    </a>

    <Toggle.Root
      bind:pressed={open}
      class="p-4 transition hover:text-brand-green-light data-[state=on]:rotate-180 data-[state=on]:text-brand-green-light sm:hidden"
    >
      <svelte:component this={open ? CloseIcon : MenuIcon} />
    </Toggle.Root>

    <div
      class={cn(
        'flex items-center justify-center bg-inherit transition max-sm:absolute max-sm:left-0 max-sm:right-0 max-sm:top-full max-sm:z-[-1] max-sm:flex-col max-sm:border-b max-sm:border-b-inherit max-sm:p-8',
        open ? 'max-sm:translate-y-0' : 'max-sm:-translate-y-full'
      )}
    >
      {#each Object.entries(pages) as [label, href]}
        <a {href} class:active={$page.url.pathname.startsWith(href)}>{label}</a>
      {/each}
    </div>
  </div>
</nav>

<style lang="postcss">
  a {
    @apply p-3 font-bold leading-loose transition;

    &:is(.active, :hover) {
      @apply text-brand-green-light hover:underline;
    }
  }
</style>
