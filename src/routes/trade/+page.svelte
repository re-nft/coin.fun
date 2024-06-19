<script>
  export let data;
</script>

<div class="grid">
  {#each data.coins as coin}
    <div>
      <h3>{coin.name}</h3>
      <p>{coin.price}</p>
    </div>
  {/each}
</div>

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }
</style>
