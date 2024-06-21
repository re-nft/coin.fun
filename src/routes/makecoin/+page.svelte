<script lang="ts">
  import type { ActionResult } from '@sveltejs/kit';
  import { enhance } from '$app/forms';

  let showMore = false;
  let formMessage = '';
  let formSuccess = false;

  function toggleShowMore() {
    showMore = !showMore;
  }

  function handleSubmit() {
    return async ({ result }: { result: ActionResult }) => {
      if (result.type === 'success') {
        formSuccess = result.data?.success;
        formMessage = result.data?.message;
      } else {
        formSuccess = false;
        formMessage = 'something unexpected happened';
      }
    };
  }
</script>

<div class="container">
  <form method="POST" action="?/create" use:enhance={handleSubmit} enctype="multipart/form-data">
    <h2>Create a New Coin</h2>
    {#if formMessage}
      <div class={formSuccess ? 'success' : 'error'}>
        {formMessage}
      </div>
    {/if}
    <label>
      Name
      <input type="text" name="name" autocomplete="off" required />
    </label>
    <label>
      Ticker
      <input type="text" name="ticker" autocomplete="off" required />
    </label>
    <label>
      Description
      <textarea name="description" rows="3" autocomplete="off" required></textarea>
    </label>
    <label>
      Image
      <input type="file" name="image" accept="image/*" required />
    </label>
    <button type="button" class="showmore" on:click={toggleShowMore}>
      {showMore ? 'Hide' : 'Show'} more options
    </button>
    {#if showMore}
      <div class="more-options">
        <label>
          Twitter link
          <input type="text" placeholder="(optional)" name="twitter" autocomplete="off" />
        </label>
        <label>
          Telegram link
          <input type="text" placeholder="(optional)" name="telegram" autocomplete="off" />
        </label>
        <label>
          Website
          <input type="text" placeholder="(optional)" name="website" autocomplete="off" />
        </label>
      </div>
    {/if}

    <button type="submit" class="submit-btn">Create Coin</button>
  </form>
</div>

<style>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 2rem;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 400px;
    background-color: #2a2a2a;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  h2 {
    text-align: center;
    margin-bottom: 1.5rem;
    color: #e0fc7a;
  }

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    color: #ffffff;
  }

  input, textarea {
    margin-top: 0.5rem;
    padding: 0.5rem;
    border: 1px solid #444;
    border-radius: 4px;
    background-color: #333;
    color: #ffffff;
  }

  .showmore {
    background: none;
    border: none;
    color: #e0fc7a;
    cursor: pointer;
    margin: 1rem 0;
    padding: 0;
    text-decoration: underline;
  }

  .more-options {
    margin-top: 1rem;
  }

  .submit-btn {
    margin-top: 1rem;
    padding: 0.75rem;
    background-color: #e0fc7a;
    color: #000000;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
  }

  .submit-btn:hover {
    background-color: #d4f06e;
  }

  .success {
    background-color: #4CAF50;
    color: white;
    padding: 10px;
    margin-bottom: 15px;
    border-radius: 4px;
  }

  .error {
    background-color: #f44336;
    color: white;
    padding: 10px;
    margin-bottom: 15px;
    border-radius: 4px;
  }
</style>