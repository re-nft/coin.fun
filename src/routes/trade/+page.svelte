<script lang="ts">
  export let data;

  $: coins = data.coins;
</script>

<h1>These coins gmi</h1>

{#each coins as coin (coin.id)}
  <p>Name: {coin.name}</p>
{/each}
