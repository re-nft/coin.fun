<script lang="ts">
  import PageMeta from '$lib/components/PageMeta.svelte';
  import { Button } from '$lib/components/ui/button';
  export let data;

  $: coins = data.coins;
</script>

<PageMeta title="Trade - Trade or create money sinks" />

<h1
  class="text-glow-green mx-auto my-20 max-w-screen-md text-center font-mono text-3xl font-extrabold uppercase text-primary"
>
  These coins gmi
</h1>

<p class="my-20 text-center">
  <Button href="/new">New coin</Button>
</p>

<h2 class="sr-only">Coins</h2>

<div class="my-20 gap-8 sm:columns-2 lg:columns-3 2xl:columns-4">
  {#each coins as coin (coin.id)}
    <a href="/trade/{coin.address}">
      <article
        class="hover:three-d mb-8 flex items-start gap-4 border-l border-t border-brand-beige/20 transition hover:border-brand-green-light"
        style="
        --color: hsl(var(--color-green-light));
        --color-bottom: hsl(var(--color-green));
        --color-right: hsl(var(--color-green-light));
        --size: 1rem;
        "
      >
        <div class="flex flex-col gap-4 py-2">
          <h3 class="text-lg font-bold text-brand-green">{coin.name}</h3>
          <span
            class="self-start rounded border border-brand-yellow px-1 text-sm uppercase text-brand-yellow"
            >${coin.symbol}</span
          >
          <p class="text-sm">{coin.description}</p>
        </div>

        <figure
          class="order-first aspect-square w-1/4 flex-none overflow-hidden"
        >
          <img
            alt=""
            class="size-full object-contain"
            role="presentation"
            src={coin.media}
          />
        </figure>
      </article>
    </a>
  {/each}
</div>
