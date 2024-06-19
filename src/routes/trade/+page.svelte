<script>
  export let data;

  let { coins } = data;
</script>

<div class="grid">
  {#each coins as coin}
    <div>
      <h3>{coin.name}</h3>
      <p>{coin.marketCap}</p>
      <p><img src={coin.media} alt={coin.name} /></p>
      <p>{coin.description}</p>
      <!-- <p><a href={coin.website} target="_blank">Website</a></p> -->
      <p>Created by: {coin.createdBy}</p>
      <p>Replies: {coin.replies}</p>
      <p>Description: {coin.description}</p>
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
