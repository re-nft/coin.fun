<script>
  let showMore = false;

  function toggleShowMore() {
    showMore = !showMore;
  }
</script>

<div>Make Coin Modal</div>

<form method="POST" action="?/create">
  <p>name</p>
  <input type="text" />
  <p>ticker</p>
  <input type="text" />
  <p>description</p>
  <input type="text" />
  <p>image</p>
  <input type="file" />
  <button class="showmore" on:click={toggleShowMore}>show more options</button>
  {#if showMore}
    <div class="more-options">
      <p>twitter link</p>
      <input type="text" placeholder="(optional)" />
      <p>telegram link</p>
      <input type="text" placeholder="(optional)" />
      <p>website</p>
      <input type="text" placeholder="(optional)" />
    </div>
  {/if}

  <button type="submit">create coin</button>
</form>

<style>
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .showmore {
    cursor: pointer;
  }

  .showmore:hover {
    text-decoration: underline;
  }

  .more-options {
    margin-top: 1em;
  }
</style>

