<script lang="ts">
  import { Button } from '$lib/components/ui/button';
  export let data;

  $: coins = data.coins;
</script>

<h1>These coins gmi</h1>

<Button href="/new">New coin</Button>

<h2>Coins</h2>
{#each coins as coin (coin.id)}
  <a href="/trade/{coin.address}">
    <article class="flex flex-col gap-4">
      <h3>{coin.name}</h3>
      <span class="uppercase">{coin.symbol}</span>
      <p>{coin.description}</p>

      <span>
        {coin.address}
      </span>

      {#if coin.telegram}
        <a
          href={coin.telegram}
          rel="noopener nofollow noreferrer"
          target="_blank"
        >
          Telegram
        </a>
      {/if}

      {#if coin.twitter}
        <a
          href={coin.twitter}
          rel="noopener nofollow noreferrer"
          target="_blank"
        >
          X
        </a>
      {/if}

      {#if coin.website}
        <a
          href={coin.website}
          rel="noopener nofollow noreferrer"
          target="_blank"
        >
          Website
        </a>
      {/if}

      <img alt="" role="presentation" src={coin.media} />
    </article>
  </a>
{/each}
