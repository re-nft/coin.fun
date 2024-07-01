<script lang="ts">
  import { page } from '$app/stores';
  import PageMeta from '$lib/components/PageMeta.svelte';

  export let data;

  $: coin = data.coin;

  const panels = {
    info: 'Info',
    chart: 'Chart',
    trades: 'Trades',
    comments: 'Comments'
  };

  $: console.log($page);

  // TODO: consider whether we want our panels to be accessible through
  // `URL.searchParams` as opposed to `URL.hash`
  $: action = $page.url.searchParams.get('action') || 'buy';
</script>

<PageMeta title={`Trade ${coin.name} ($${coin.symbol})`} />

<nav
  class="fixed bottom-0 left-0 right-0 flex h-12 text-center md:hidden [&>*]:flex-1"
>
  {#each Object.entries(panels) as [id, label] (id)}
    <a class:active={$page.url.hash.startsWith(`#${id}`)} href="?panel={id}"
      >{label}</a
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

<section class="flex flex-col gap-4 rounded-lg bg-brand-yellow p-4">
  <p class="flex gap-4 [&>*]:flex-1">
    <button class="rounded border p-2" type="button">Buy</button>
    <button class="rounded border p-2" type="button">Sell</button>
  </p>

  <form class="">
    <label>
      <input type="text" />
    </label>
    <button type="submit">Place trade</button>
  </form>
</section>

<section class="panels">
  <div class="panel" id="info">Info</div>
  <div class="panel" id="chart">Chart</div>
  <div class="panel" id="trades">Trades</div>
  <div class="panel" id="comments">Comments</div>
</section>

<style lang="postcss">
  .panel {
    @apply max-md:hidden;
  }

  .panel:target,
  .panel:has(:target),
  .panels:not(:has(:target)) > .panel:first-of-type {
    @apply max-md:block;
  }

  .active {
    @apply underline;
  }
</style>
