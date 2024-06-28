<script lang="ts">
  export let data;

  $: coins = data.coins;
</script>

<h1>These coins gmi</h1>

{#each coins as coin (coin.id)}
  <a href="/trade/{coin.address}">
    <article>
      <p>Name: {coin.name}</p>
    </article>
  </a>
{/each}
