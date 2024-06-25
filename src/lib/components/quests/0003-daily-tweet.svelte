<script lang="ts">
  import type { ActionResult } from '@sveltejs/kit';
  import ChevronsDownUp from 'lucide-svelte/icons/chevrons-down-up';
  import ChevronsUpDown from 'lucide-svelte/icons/chevrons-up-down';
  import { onMount } from 'svelte';
  import { scale, slide } from 'svelte/transition';

  import { enhance } from '$app/forms';
  import { goto } from '$app/navigation';
  import Quest from '$lib/components/Quest.svelte';
  import type { QuestCallError } from '$lib/quests';
  import type { Profile, TweetSelect } from '$lib/server/db';
  import { getUTCDayStart } from '$lib/utils/date';
  import { suffix } from '$lib/utils/number';
  import { cn } from '$lib/utils/ui';

  import { Button } from '../ui/button';

  type Tweet = TweetSelect & { points?: number };
  type TweetsByDate = Map<Date, Tweet[]>;

  export let id: string;
  export let locale: string | undefined = undefined;
  export let profile: Profile | undefined = undefined;
  export let tweets: Tweet[] = [];

  // We're snooping the title from the props here because we don't actually
  // want to use it for this component. Maybe rewrite Quest.svelte some point.
  export let title: string | undefined = undefined;

  const intlDate = new Intl.DateTimeFormat(locale, {
    dateStyle: 'long'
  });

  const tweetText = encodeURIComponent(
    'Get poor quicker. Fill my bags @coindotfun'
  );

  // Twitter list setup
  $: [tweetsByDate] = tweets.reduce<
    [tweetsByDate: TweetsByDate, prevDate: Date]
  >(
    ([tweetsByDate, prevDate], status) => {
      const nextDate = getUTCDayStart(status.createdAt);
      let currDate = prevDate;

      while (currDate >= nextDate) {
        tweetsByDate.set(new Date(currDate), []);
        currDate.setDate(currDate.getDate() - 1);
      }

      tweetsByDate.set(currDate, [
        ...(tweetsByDate.get(currDate) ?? []),
        status
      ]);

      return [tweetsByDate, nextDate];
    },
    [new Map<Date, Tweet[]>(), getUTCDayStart()]
  );

  $: collapsedDates = Array.from(tweetsByDate.keys());

  // Form things
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

  // Collapse code
  let collapsed = true;

  $: {
    if (typeof document !== 'undefined')
      document.body.style.overflow = collapsed ? '' : 'hidden';
  }

  onMount(() => {
    collapsed = !window.matchMedia('(min-width: 768px) and (min-height: 768px)')
      .matches;
  });
</script>

<Quest
  {...$$restProps}
  class={cn(
    'fixed bottom-0 right-0 z-[1] w-full max-w-[575px] bg-brand-black/90 shadow-none backdrop-blur transition-all before:hidden after:hidden hover:transform-none max-md:h-[100dvh]',
    collapsed ?
      'max-h-[3rem] overflow-hidden'
    : 'max-h-[100dvh] md:max-h-[75dvh]'
  )}
  style="--color: hsl(var(--color-red));"
>
  <header class="flex w-full items-center gap-4" slot="header">
    {title}

    <button
      class="ml-auto mr-4 flex size-8 items-center justify-center rounded border border-muted"
      on:click={() => {
        collapsed = !collapsed;
      }}
      type="button"
    >
      {#if !collapsed}
        <ChevronsDownUp size={16} />
      {:else}
        <ChevronsUpDown size={16} />
      {/if}
    </button>
  </header>

  <div class="flex min-h-0 grow flex-col gap-8 text-left" slot="content">
    {#if tweets?.length}
      <ol
        class="flex min-h-0 grow flex-col overflow-y-auto border-b border-b-[--color] bg-[#15202B]"
      >
        {#each Array.from(tweetsByDate.entries()) as [date, tweets] (date)}
          <li class="w-full">
            <h3 class="flex items-center gap-2 text-muted-foreground/50">
              <time
                class="flex h-12 flex-none items-center gap-2 whitespace-nowrap before:basis-4 before:border-b before:border-b-muted-foreground/50"
                datetime={date.toISOString()}>{intlDate.format(date)}</time
              >
              <span
                class="flex h-12 grow items-center gap-2 before:basis-4 before:border-b before:border-b-muted-foreground/50 after:flex-1 after:border-b after:border-b-muted-foreground/50"
                class:text-brand-yellow={tweets.length}
                class:text-glow-red={tweets.length}
                class:text-glow-black={!tweets.length}
                >{tweets.reduce(
                  (total, { points }) => total + (points ?? 0),
                  0
                )}</span
              >
              <span class="text-sm font-normal">({tweets.length})</span>
              <button
                class="ml-auto mr-4 flex size-8 items-center justify-center rounded border border-muted"
                on:click={() => {
                  collapsedDates =
                    collapsedDates.includes(date) ?
                      collapsedDates.filter((_) => _ !== date)
                    : [...collapsedDates, date];
                  // @ts-expect-error TODO: types
                  window?.twttr?.widgets?.load?.();
                }}
                type="button"
              >
                {#if !collapsedDates.includes(date)}
                  <ChevronsDownUp size={16} />
                {:else}
                  <ChevronsUpDown size={16} />
                {/if}
              </button>
            </h3>
            {#if !collapsedDates.includes(date)}
              <div transition:slide>
                {#each tweets as status (status.id)}
                  <div
                    class={cn(
                      'px-4',
                      status.points && 'ml-4 border-l-2 border-l-brand-yellow'
                    )}
                  >
                    <blockquote
                      class="twitter-tweet text-brand-beige/40"
                      data-dnt="true"
                      data-theme="dark"
                    >
                      <p class="my-2 text-brand-beige">
                        {status.fullText}
                      </p>
                      &mdash; {profile?.displayName} (@{profile?.userName})
                      <a
                        class="text-brand-orange underline transition hover:text-brand-yellow"
                        href="https://twitter.com/{profile?.userName}/status/{status.id}?ref_src=twsrc%5Etfw"
                        >{intlDate.format(status?.createdAt)}</a
                      >
                    </blockquote>
                  </div>
                {/each}
              </div>
            {/if}
          </li>
        {/each}
      </ol>
    {:else}
      <div class="flex flex-col items-center gap-8 p-8">
        <p class="text-brand-yellow">
          These posts represent your bags. I.e. empty.
        </p>

        {#if profile}
          <ol class="max-w-fit list-inside list-decimal text-left">
            {#if profile?.characterS1 === 'normie'}
              <li>Meme or mention @coindotfun</li>
              <li>
                Gib <span class="text-glow-green">150k</span> points.
              </li>
            {:else if profile?.characterS1 === 'heftie'}
              <li>
                Retweet a normie: <span class="text-glow">100k</span> points
              </li>
              <li>
                Quote a normie: <span class="text-glow">200k</span> points
              </li>
            {/if}
          </ol>
        {/if}

        <p class="text-sm text-muted-foreground">
          Get those @inversebrah's going.
        </p>
      </div>
    {/if}

    {#if profile}
      <div class="flex flex-none flex-col items-center gap-8">
        <Button
          class="mx-8 max-w-fit self-center"
          href="https://twitter.com/intent/tweet?text={tweetText}"
        >
          Tweet @coindotfun
        </Button>

        <p class="text-sm text-muted-foreground">
          Tweet not in the list? Add it below:
        </p>

        <form
          action="/api/quests?/call"
          class="relative flex w-full flex-col gap-4"
          method="POST"
          use:enhance={async () => {
            formData = undefined;
            formStatus = 'pending';
            return async ({ update, result }) => {
              if (result.type === 'error') {
                formData = {
                  errors: [
                    { name: 'FormError', message: 'Form cannot submit.' }
                  ]
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
                  Tweet added. Points are updated every day.
                </p>
              {/if}
            </div>
          {/if}

          <input name="questId" type="hidden" value={id} />
          <input name="methodName" type="hidden" value="registerTweet" />

          <p
            class="flex items-center justify-stretch bg-brand-red/80 text-brand-black"
          >
            <label class="px-2 text-sm text-brand-beige/75" for="url"
              >Link:</label
            >

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
    {:else}
      <Button
        class="mx-8 mb-8 max-w-fit self-center"
        href="/api/twitter/sign-in"
      >
        Sign in
      </Button>
    {/if}
  </div>
</Quest>
