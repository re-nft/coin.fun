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

<div class="mt-10 flex flex-col items-center justify-center">
  <a
    class="inline-flex h-10 items-center justify-center whitespace-nowrap rounded-md px-4 py-2 text-2xl font-medium text-slate-50 ring-offset-white transition-colors hover:bg-transparent hover:font-bold hover:text-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50 dark:focus-visible:ring-slate-300"
    href="/board">[go back]</a
  >
  <div class="max-w-[420px] rounded-lg p-6 text-white">
    <div class="flex flex-col gap-4">
      <div class="flex flex-col">
        <label class="mb-1 text-sm font-semibold text-blue-400" for="name"
          >name</label
        ><input
          class="rounded-md border border-slate-200 bg-[#2a2a3b] p-2"
          id="name"
          placeholder=""
          type="text"
          value=""
        />
      </div>
      <div class="flex flex-col">
        <label class="mb-1 text-sm font-semibold text-blue-400" for="ticker"
          >ticker</label
        ><input
          class="rounded-md border border-slate-200 bg-[#2a2a3b] p-2"
          id="ticker"
          placeholder=""
          type="text"
          value=""
        />
      </div>
      <div class="flex flex-col">
        <label class="mb-1 text-sm font-semibold text-blue-400" for="text"
          >description</label
        ><textarea
          class="h-24 rounded-md border border-slate-200 bg-[#2a2a3b] p-2"
          id="text"
          placeholder=""
        ></textarea>
      </div>
      <div class="flex flex-col">
        <label class="mb-1 text-sm font-semibold text-blue-400" for="image"
          >image</label
        ><input
          class="w-full rounded-md border border-slate-200 bg-[#2a2a3b] p-2"
          id="image"
          accept="image/*"
          type="file"
        />
      </div>
      <div class="w-fit cursor-pointer text-blue-400 hover:underline">
        Hide more options ↑
      </div>
      <div class="flex flex-col">
        <label class="mb-1 text-sm font-semibold text-blue-400" for="twitter"
          >twitter link</label
        ><input
          class="rounded-md border border-slate-200 bg-[#2a2a3b] p-2"
          id="twitter"
          placeholder="(optional)"
          type="text"
          value=""
        />
      </div>
      <div class="flex flex-col">
        <label class="mb-1 text-sm font-semibold text-blue-400" for="telegram"
          >telegram link</label
        ><input
          class="rounded-md border border-slate-200 bg-[#2a2a3b] p-2"
          id="telegram"
          placeholder="(optional)"
          type="text"
          value=""
        />
      </div>
      <div class="flex flex-col">
        <label class="mb-1 text-sm font-semibold text-blue-400" for="website"
          >website</label
        ><input
          class="rounded-md border border-slate-200 bg-[#2a2a3b] p-2"
          id="website"
          placeholder="(optional)"
          type="text"
          value=""
        />
      </div>
      <button
        class="inline-flex h-10 items-center justify-center whitespace-nowrap rounded-md bg-[#0d6efd] px-4 py-2 text-sm font-medium text-slate-50 ring-offset-white transition-colors hover:bg-slate-900/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:bg-slate-50 dark:text-slate-900 dark:ring-offset-slate-950 dark:hover:bg-slate-50/90 dark:focus-visible:ring-slate-300"
        >Create coin</button
      >
      <div>Cost to deploy: ~0.02 SOL</div>
    </div>
  </div>
</div>

<div class="container">
  <form
    method="POST"
    action="?/create"
    use:enhance={handleSubmit}
    enctype="multipart/form-data"
  >
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
      <textarea name="description" rows="3" autocomplete="off" required
      ></textarea>
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
          <input
            type="text"
            placeholder="(optional)"
            name="twitter"
            autocomplete="off"
          />
        </label>
        <label>
          Telegram link
          <input
            type="text"
            placeholder="(optional)"
            name="telegram"
            autocomplete="off"
          />
        </label>
        <label>
          Website
          <input
            type="text"
            placeholder="(optional)"
            name="website"
            autocomplete="off"
          />
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

  input,
  textarea {
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
    background-color: #4caf50;
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
