<script>
  export let data;

  let { coins } = data;
</script>

<div class="grid">
  {#each coins as coin}
    <div>
      <h3>{coin.name}</h3>
      <p>{coin.price}</p>
    </div>
  {/each}
</div>

<style>
  .grid {
    display: grid;
    gap: 1rem;
  }

  @media (max-width: 767px) {
    .grid {
      grid-template-columns: 1fr;
    }
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    .grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 1024px) {
    .grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
</style>
