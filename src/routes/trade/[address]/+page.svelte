<script lang="ts">
  import { onMount } from 'svelte';

  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import PageMeta from '$lib/components/PageMeta.svelte';
  import { cn } from '$lib/utils/ui';

  export let data;

  $: coin = data.coin;

  const desktopPanels = {
    thread: 'Thread',
    trades: 'Trades'
  };

  const panels = {
    info: 'Info',
    chart: 'Chart',
    ...desktopPanels
  };

  const MIN_MEDIA = '(min-width: 768px)';
  let showAllPanels: boolean =
    (typeof window !== 'undefined' && window.matchMedia(MIN_MEDIA).matches) ||
    false;

  $: action = $page.url.searchParams.get('action') || 'buy';
  $: initialView = $page.url.searchParams.get('view') || 'info';
  $: view =
    !showAllPanels ? initialView
    : Object.keys(desktopPanels).includes(initialView) ? initialView
    : 'thread';

  onMount(() => {
    const media = globalThis?.matchMedia(MIN_MEDIA);

    function updatePanelVisibility() {
      showAllPanels = media.matches;
      view =
        !showAllPanels ? view
        : Object.keys(desktopPanels).includes(view) ? view
        : 'thread';
    }

    media.addEventListener('change', updatePanelVisibility);
    return () => media.removeEventListener('change', updatePanelVisibility);
  });
</script>

<PageMeta title={`Trade ${coin.name} ($${coin.symbol})`} />

<nav
  class="fixed bottom-0 left-0 right-0 flex overflow-auto border-t border-t-brand-yellow bg-brand-orange text-center text-xs md:hidden [&>*]:flex-1"
>
  {#each Object.entries(panels) as [id, label] (id)}
    <a
      class={cn(
        'px-2 py-4 text-brand-black transition',
        id === view && 'bg-brand-yellow font-bold'
      )}
      href={`?${new URLSearchParams({ action, view: id })}`}>{label}</a
    >
  {/each}
</nav>

<header class="my-20 flex flex-col items-center gap-8">
  <h1
    class="text-glow-green mx-auto max-w-screen-md text-center font-mono text-3xl font-extrabold uppercase text-primary"
  >
    {coin.name} <br />
  </h1>
  <p
    class="rounded border border-brand-yellow px-1 text-sm uppercase text-brand-yellow"
  >
    ${coin.symbol}
  </p>
</header>

<div class="contents md:flex">
  <div class="max-w-md flex-1 max-md:contents">
    <section
      class={cn(
        'flex flex-col gap-4 rounded-lg p-4 transition',
        action === 'buy' && 'bg-brand-green',
        action === 'sell' && 'bg-brand-red'
      )}
    >
      <p class="flex gap-4 [&>*]:flex-1">
        <a
          class="rounded border p-2"
          href={`?${new URLSearchParams({ action: 'buy', view })}`}>Buy</a
        >
        <a
          class="rounded border p-2"
          href={`?${new URLSearchParams({ action: 'sell', view })}`}>Sell</a
        >
      </p>

      <form class="">
        <label>
          <input type="text" />
        </label>
        <button type="submit">Place trade</button>
      </form>
    </section>

    <section class={cn('', view !== 'info' && 'max-md:hidden')}>Info</section>
  </div>

  <div class="order-first flex-1 max-md:contents">
    <section class={cn('order-first', view !== 'chart' && 'max-md:hidden')}>
      Chart
    </section>

    <nav class="flex gap-4 max-md:hidden">
      {#each Object.entries(desktopPanels) as [id, label] (id)}
        <a
          class={cn(
            'border border-transparent p-2 transition hover:border-brand-yellow',
            id === view ?
              'bg-brand-yellow font-bold text-brand-black'
            : 'text-brand-yellow'
          )}
          href={`?${new URLSearchParams({ action, view: id })}`}>{label}</a
        >
      {/each}
    </nav>

    <section class={cn(view !== 'thread' && 'hidden')}>Thread</section>
    <section class={cn(view !== 'trades' && 'hidden')}>Trades</section>
  </div>
</div>

<style lang="postcss">
</style>
