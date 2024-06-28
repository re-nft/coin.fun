<script lang="ts">
  import ChevronsDownUp from 'lucide-svelte/icons/chevrons-down-up';
  import ChevronsUpDown from 'lucide-svelte/icons/chevrons-up-down';
  import { slide } from 'svelte/transition';

  import { enhance } from '$app/forms';
  import { Button } from '$lib/components/ui/button';
  import { cn } from '$lib/utils/ui';

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
  let file: File | undefined;
  let telegram = form?.data?.telegram || '';
  let twitter = form?.data?.twitter || '';
  let website = form?.data?.website || '';

  let formState: 'pristine' | 'dirty' | 'error' | 'valid' =
    form?.errors ? 'error' : 'pristine';

  $: {
    const required = [name, ticker, description, file];
    const fields = [...required, telegram, twitter, website];

    formState =
      required.every((_) => Boolean(_)) ? 'valid'
      : fields.some((_) => Boolean(_)) ? 'dirty'
      : fields.every((_) => !_) ? 'pristine'
      : formState;

    ticker = ticker.toUpperCase();
  }
</script>

<h1
  class="text-glow-green mx-auto my-20 max-w-screen-md text-center font-mono text-3xl font-extrabold uppercase text-primary"
>
  New {name} coin
</h1>

{#if form?.error}
  <div class="text-brand-red">
    {form?.error}
  </div>
{/if}

{#if form?.errors}
  <dt class="text-brand-red">
    {#each Object.entries(form.errors) as [key, errors] (key)}
      <dt>{key}</dt>
      <dd>
        {#each errors as error (error)}{error}<br />{/each}
      </dd>
    {/each}
  </dt>
{/if}

<form
  class={cn(
    'container flex max-w-md flex-col gap-8 rounded-lg border-2 p-8 shadow-2xl backdrop-blur transition-all',

    formState === 'dirty' && 'border-brand-yellow shadow-brand-yellow',
    formState === 'error' && 'border-brand-red shadow-brand-red',
    formState === 'pristine' && 'border-brand-beige shadow-brand-green-light',
    formState === 'valid' && 'border-brand-green shadow-brand-green'
  )}
  enctype="multipart/form-data"
  method="POST"
  use:enhance
>
  <fieldset class="flex gap-4">
    <label class="flex-grow">
      Name
      <input
        type="text"
        name="name"
        autocomplete="off"
        required
        bind:value={name}
      />
    </label>

    <label class="max-w-[calc(1.5rem+12ch)] flex-shrink">
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

  <fieldset class="flex flex-col gap-8">
    <label>
      Description
      <textarea
        name="description"
        rows="3"
        autocomplete="off"
        required
        bind:value={description}
      />
    </label>
    <label>
      Image
      <input
        type="file"
        name="media"
        accept="image/*"
        required
        bind:value={file}
      />
    </label>
  </fieldset>

  <fieldset class="flex flex-col items-center">
    <button class="flex items-center" on:click={toggleShowMore} type="button">
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

  <Button disabled={formState !== 'valid'} type="submit">Create Coin</Button>
</form>

<style lang="postcss">
  label {
    @apply lowercase text-brand-yellow;
  }

  label::first-line {
    color: transparent;
    text-shadow: 0.75rem 0 0 hsl(var(--color-yellow));
  }

  input,
  textarea {
    @apply w-full text-brand-beige;
  }
</style>
