<script lang="ts">
  import ChevronsDownUp from 'lucide-svelte/icons/chevrons-down-up';
  import ChevronsUpDown from 'lucide-svelte/icons/chevrons-up-down';
  import { slide } from 'svelte/transition';

  import { enhance } from '$app/forms';
  import PageMeta from '$lib/components/PageMeta.svelte';
  import { Button } from '$lib/components/ui/button';
  import { cn } from '$lib/utils/ui';

  type FormState = 'pristine' | 'dirty' | 'error' | 'valid';

  export let data;
  export let form;

  $: console.log(data);
  $: console.log(form);

  let showMore = false;
  function toggleShowMore() {
    showMore = !showMore;
  }

  let name = form?.data?.name || '';
  let ticker = form?.data?.symbol || '';
  let description = form?.data?.description || '';
  let media = form?.data?.media;
  let telegram = form?.data?.telegram;
  let twitter = form?.data?.twitter;
  let website = form?.data?.website;

  $: formState = (form?.errors ? 'error' : 'pristine') as FormState;

  $: {
    const required = [name, ticker, description, media];
    const fields = [...required, telegram, twitter, website];

    formState =
      required.every((_) => Boolean(_)) ? 'valid'
      : fields.some((_) => Boolean(_)) ? 'dirty'
      : fields.every((_) => !_) ? 'pristine'
      : formState;

    ticker = String(ticker).toUpperCase();
  }

  let isSubmitting = false;
</script>

<PageMeta title="Create new money sink" />

<h1
  class="text-glow-green mx-auto my-20 max-w-screen-md text-center font-mono text-3xl font-extrabold uppercase text-primary"
>
  New {name ? `${name} ${ticker ? `($${ticker})` : ''}` : ''} coin
</h1>

<div
  class={cn(
    'container flex max-w-md flex-col rounded-lg border-2 p-8 text-center shadow-2xl backdrop-blur transition-all',

    formState === 'dirty' && 'border-brand-yellow shadow-brand-yellow',
    formState === 'error' && 'border-brand-red shadow-brand-red',
    formState === 'pristine' && 'border-brand-beige shadow-brand-green-light',
    formState === 'valid' && 'border-brand-green shadow-brand-green'
  )}
>
  {#if isSubmitting}
    <div class="flex flex-col items-center gap-8" transition:slide>
      <p class="loader">🚀</p>
      <p>Launch sequence initiated…</p>
    </div>
  {:else if form?.ok && form?.message && form?.result}
    <div class="flex flex-col items-center gap-8" transition:slide>
      <p>{form.message}</p>
      <p>
        <Button href={`/trade/${form.result.address}`}>View coin</Button>
        <Button href="/new">Create another</Button>
      </p>
    </div>
  {:else}
    <form
      class="flex flex-col gap-8"
      enctype="multipart/form-data"
      method="POST"
      use:enhance={() => {
        isSubmitting = true;
        return async ({ update }) => {
          await update();
          isSubmitting = false;
        };
      }}
      transition:slide
    >
      {#if form?.error || form?.errors}
        <div class="text-brand-red" transition:slide>
          {#if form?.error}
            <p>
              {form?.error}
            </p>
          {/if}

          {#if form?.errors}
            <ul
              class="list-outside list-disc marker:text-brand-yellow marker:content-['•_']"
            >
              {#each Object.entries(form.errors) as [key, errors] (key)}
                {#each errors as error (error)}
                  <li class="ml-[2ch]">{error}</li>
                {/each}
              {/each}
            </ul>
          {/if}
        </div>
      {/if}

      <fieldset class="flex gap-4">
        <label class="flex-grow">
          Name
          <input type="text" name="name" autocomplete="off" bind:value={name} />
        </label>

        <label class="max-w-[calc(1.5rem+12ch)] flex-shrink">
          Ticker
          <input
            type="text"
            name="symbol"
            autocomplete="off"
            bind:value={ticker}
          />
        </label>
      </fieldset>

      <fieldset class="flex flex-col gap-8">
        <label>
          Description
          <textarea
            name="description"
            rows="3"
            autocomplete="off"
            bind:value={description}
          />
        </label>
        <label>
          Image
          <input type="file" name="media" accept="image/*" bind:value={media} />
        </label>
      </fieldset>

      <fieldset class="flex flex-col items-center">
        <button
          class="flex items-center"
          on:click={toggleShowMore}
          type="button"
        >
          {showMore ? 'Hide' : 'Show'} more options
          <span class="flex size-12 flex-none items-center justify-center">
            {#if showMore}
              <ChevronsDownUp size={16} />
            {:else}
              <ChevronsUpDown size={16} />
            {/if}
          </span>
        </button>
        {#if showMore}
          <div class="flex w-full flex-col gap-4 p-4" transition:slide>
            <label>
              Twitter link
              <input
                type="text"
                placeholder="(optional)"
                name="twitter"
                autocomplete="off"
                bind:value={twitter}
              />
            </label>
            <label>
              Telegram link
              <input
                type="text"
                placeholder="(optional)"
                name="telegram"
                autocomplete="off"
                bind:value={telegram}
              />
            </label>
            <label>
              Website
              <input
                type="text"
                placeholder="(optional)"
                name="website"
                autocomplete="off"
                bind:value={website}
              />
            </label>
          </div>
        {/if}
      </fieldset>

      <Button type="submit">Create Coin</Button>
    </form>
  {/if}
</div>

<style lang="postcss">
  label {
    @apply text-left lowercase text-brand-yellow;
  }

  label::first-line {
    color: transparent;
    text-shadow: 0.75rem 0 0 hsl(var(--color-yellow));
  }

  input,
  textarea {
    @apply w-full text-brand-beige;
  }

  .loader {
    @apply size-20 text-left;
    animation: orbit 2s linear infinite;
  }

  @keyframes orbit {
    to {
      transform: rotate(1turn);
    }
  }
</style>
