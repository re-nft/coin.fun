<script lang="ts">
  import type { ActionResult } from '@sveltejs/kit';
  import ChevronsDownUp from 'lucide-svelte/icons/chevrons-down-up';
  import ChevronsUpDown from 'lucide-svelte/icons/chevrons-up-down';
  import { onMount } from 'svelte';
  import { slide } from 'svelte/transition';

  import { enhance } from '$app/forms';
  import { goto } from '$app/navigation';
  import Quest from '$lib/components/Quest.svelte';
  import type { QuestCallError } from '$lib/quests';
  import type { Profile, TweetSelect } from '$lib/server/db';
  import { cn } from '$lib/utils/ui';

  import { Button } from '../ui/button';

  export let id: string;
  export let locale: string | undefined = undefined;
  export let profile: Profile | undefined = undefined;
  export let tweets: (TweetSelect & { points?: number })[];

  const intlDate = new Intl.DateTimeFormat(locale, {
    dateStyle: 'long'
  });

  const tweetText = encodeURIComponent(
    'Get poor quicker. Fill my bags @coindotfun'
  );

  let formData: { id: string } | { errors: QuestCallError[] } | undefined =
    undefined;
  let formStatus: ActionResult['type'] | 'idle' | 'pending' = 'idle';

  let url: string;
  let prevUrl: string;

  $: data = formData && 'id' in formData ? formData.id : undefined;
  $: errors = formData && 'errors' in formData ? formData?.errors : undefined;

  $: {
    if (prevUrl !== url) errors = undefined;
    prevUrl = url;
  }

  let collapsed = false;

  onMount(() => {
    collapsed = !window.matchMedia('(min-width: 768px) and (min-height: 768px)')
      .matches;
  });
</script>

<Quest
  {...$$restProps}
  class={cn(
    'fixed bottom-0 right-0 w-full max-w-[575px] bg-brand-black/90 shadow-none backdrop-blur transition-all before:hidden after:hidden hover:transform-none',
    collapsed ? 'max-h-[3rem] overflow-auto' : 'overflow-none max-h-[75dvh]'
  )}
  style="--color: hsl(var(--color-red));"
>
  <header class="flex w-full items-center gap-4" slot="header">
    Daily tweets:
    {#if profile?.characterS1 === 'normie'}
      <span class="text-[--color]">150k</span>
    {:else if profile?.characterS1 === 'heftie'}
      <span class="text-[--color]">100k or 200k</span>
    {/if}

    <button
      class="ml-auto mr-4 flex size-8 items-center justify-center rounded border border-muted"
      on:click={() => {
        collapsed = !collapsed;
      }}
      type="button"
    >
      {#if collapsed}
        <ChevronsDownUp size={16} />
      {:else}
        <ChevronsUpDown size={16} />
      {/if}
    </button>
  </header>

  <div class="flex flex-col gap-8" slot="content">
    {#if tweets?.length}
      <div class="flex max-h-[400px] flex-col overflow-y-auto bg-[#15202B]">
        {#each tweets as status (status.id)}
          <div class={cn('p-2', status.points && 'bg-brand-yellow/25')}>
            <blockquote class="twitter-tweet" data-dnt="true" data-theme="dark">
              <p>
                {status.fullText}
              </p>
              &mdash; {profile?.displayName} (@{profile?.userName})<a
                href="https://twitter.com/{profile?.userName}/status/{status.id}?ref_src=twsrc%5Etfw"
                >{intlDate.format(status?.createdAt)}</a
              >
            </blockquote>
          </div>
        {/each}
      </div>
    {:else}
      <div class="flex flex-col items-center gap-8 p-8">
        <p class="text-brand-yellow">
          These posts represent your bags. I.e. empty.
        </p>

        <ol class="max-w-fit list-inside list-decimal text-left">
          {#if 'characterS1 === normie'}
            <li>Meme @coindotfun</li>
            <li>Mention @coindotfun</li>
            <li>
              Gib <span class="text-glow-green">150k</span> points.
            </li>
          {:else if 'characterS1 === heftie'}
            <li>
              Retweet a normie: <span class="text-glow">100k</span> points
            </li>
            <li>Quote a normie: <span class="text-glow">200k</span> points</li>
          {/if}
        </ol>

        <p class="text-sm text-muted-foreground">
          Get those @inversebrah's going.
        </p>
      </div>
    {/if}

    <Button
      class="mx-8 max-w-fit self-center"
      href="https://twitter.com/intent/tweet?text={tweetText}"
    >
      Tweet @coindotfun
    </Button>

    <h2 class="sr-only">Add a tweet</h2>
    <p class="text-sm text-muted-foreground">
      Tweet not in the list? Add it here.
    </p>

    <form
      action="/api/quests?/call"
      class="relative flex flex-col gap-4"
      method="POST"
      use:enhance={async () => {
        formData = undefined;
        formStatus = 'pending';
        return async ({ update, result }) => {
          if (result.type === 'error') {
            formData = {
              errors: [{ name: 'FormError', message: 'Form cannot submit.' }]
            };
            return;
          }

          if (result.type === 'redirect') {
            return goto(result.location);
          }

          // @ts-expect-error TODO: types
          formData = result?.data;
          formStatus = result.type;

          setTimeout(() => {
            formData = undefined;
            formStatus = 'idle';
          }, 10_000);

          await update();

          // We need to re-initialze tweets after svelte has updated state
          // through it's loaders.
          if (formStatus === 'success')
            // @ts-expect-error TODO: types
            window?.twttr?.widgets?.load?.();
        };
      }}
    >
      {#if errors || data}
        <div
          class="absolute bottom-full left-0 right-0 text-brand-beige"
          transition:slide
        >
          {#if errors?.length}
            <ol class="flex flex-col items-center bg-brand-red p-2">
              {#each errors as error (error.message)}
                <li>{error.message}</li>
              {/each}
            </ol>
          {/if}

          {#if formStatus === 'success'}
            <p class="bg-brand-green p-2">
              Tweet added. Points are updated every hour.
            </p>
          {/if}
        </div>
      {/if}

      <input name="questId" type="hidden" value={id} />
      <input name="methodName" type="hidden" value="registerTweet" />

      <p
        class="flex items-center justify-stretch bg-brand-red/80 text-brand-black"
      >
        <label class="px-2 text-sm text-brand-beige/75" for="url">Link:</label>

        <input
          class="my-0.5 min-w-0 flex-1 basis-full border-0 bg-brand-black/60 text-brand-beige placeholder:text-brand-beige/50"
          id="url"
          disabled={formStatus === 'pending'}
          name="params[]"
          placeholder="https//x.com/{profile?.userName}/123…"
          type="text"
          bind:value={url}
        />

        <button
          class="mx-2 w-[5rem] bg-brand-yellow px-2 font-bold uppercase transition hover:bg-brand-orange disabled:cursor-not-allowed disabled:bg-brand-black/20"
          disabled={!url || formStatus === 'pending'}
          type="submit"
        >
          {#if formStatus === 'pending'}
            <span class="block animate-spin">🥳</span>
          {:else}
            Add
          {/if}
        </button>
      </p>
    </form>
  </div>
</Quest>
