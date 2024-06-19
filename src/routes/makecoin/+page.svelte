<script>
  let showMore = false;

  function toggleShowMore() {
    showMore = !showMore;
  }
</script>

<div>Make Coin Modal</div>

<form method="POST" action="?/create">
  <label>name<input type="text" name="name" autocomplete="off" /></label>
  <label>ticker<input type="text" name="ticker" autocomplete="off" /></label>
  <label
    >description<input type="text" name="ticker" autocomplete="off" /></label
  >
  <label>image<input type="file" name="image" /></label>
  <button class="showmore" on:click={toggleShowMore}>show more options</button>
  {#if showMore}
    <div class="more-options">
      <label
        >twitter link<input
          type="text"
          placeholder="(optional)"
          name="twitter"
          autocomplete="off"
        /></label
      >
      <label
        >telegram link<input
          type="text"
          placeholder="(optional)"
          name="telegram"
          autocomplete="off"
        /></label
      >
      <label
        >website<input
          type="text"
          placeholder="(optional)"
          name="website"
          autocomplete="off"
        /></label
      >
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

