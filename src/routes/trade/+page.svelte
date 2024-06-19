<script>
  export let data;

  let { coins } = data;
</script>

<div class="grid">
  {#each coins as coin}
    <div class="card">
      <div class="image-container">
        <img src={coin.media} alt={coin.name} />
      </div>
      <div class="content">
        <h3>{coin.name} (ticker: {coin.symbol})</h3>
        <p>market cap: {coin.marketCap}</p>
        <p>replies: {coin.replies}</p>
        <p>{coin.description}</p>
        <p>Created by: {coin.createdBy}</p>
      </div>
    </div>
  {/each}
</div>

<style>
  .grid {
    display: grid;
    gap: 1rem;
    padding: 1rem;
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

  .card {
    display: flex;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s, box-shadow 0.2s;
    border: 2px solid transparent;
  }

  .card:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    border: 2px solid #e0fc7a;
  }

  .image-container {
    flex: 0 0 150px;
    height: 150px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .image-container img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }

  .content {
    flex: 1;
    padding: 1rem;
  }

  .content h3 {
    margin: 0 0 0.5rem;
    font-size: 1.2rem;
    color: #fff;
  }

  .content p {
    margin: 0.5rem 0;
    font-size: 0.9rem;
    color: #ccc;
  }

  .content p:first-of-type {
    margin-top: 0;
  }
</style>

