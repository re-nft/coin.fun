<script lang="ts">
  import { slide } from 'svelte/transition';

  import { enhance } from '$app/forms';

  const formMessage = null;
  const formSuccess = null;

  let showMore = false;
  function toggleShowMore() {
    showMore = !showMore;
  }

  let ticker = '';
  $: ticker = ticker.toUpperCase();
</script>

<h1>Create coin.</h1>

<form
  enctype="multipart/form-data"
  method="POST"
  use:enhance={async () => {
    return ({ update }) => {
      update();
    };
  }}
>
  <h1>New coin</h1>

  {#if formMessage}
    <div class={formSuccess ? 'success' : 'error'}>
      {formMessage}
    </div>
  {/if}

  <fieldset class="flex gap-4">
    <label class="flex-1">
      Name
      <input type="text" name="name" autocomplete="off" required />
    </label>

    <label class="flex-none">
      Ticker
      <input
        type="text"
        name="symbol"
        autocomplete="off"
        required
        bind:value={ticker}
      />
    </label>
  </fieldset>

  <label>
    Description
    <textarea name="description" rows="3" autocomplete="off" required
    ></textarea>
  </label>
  <label>
    Image
    <input type="file" name="media" accept="image/*" required />
  </label>

  <button class="showmore" on:click={toggleShowMore} type="button">
    {showMore ? 'Hide' : 'Show'} more options
  </button>
  {#if showMore}
    <div class="more-options" transition:slide>
      <label>
        Twitter link
        <input
          type="text"
          placeholder="(optional)"
          name="meta.twitter"
          autocomplete="off"
        />
      </label>
      <label>
        Telegram link
        <input
          type="text"
          placeholder="(optional)"
          name="meta.telegram"
          autocomplete="off"
        />
      </label>
      <label>
        Website
        <input
          type="text"
          placeholder="(optional)"
          name="meta.website"
          autocomplete="off"
        />
      </label>
    </div>
  {/if}

  <button type="submit" class="submit-btn">Create Coin</button>
</form>

<style lang="postcss">
  label {
    @apply flex flex-col;
  }

  label > :last-child {
    flex: 1;
    flex-basis: 75%;
  }
</style>
