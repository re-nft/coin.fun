<script lang="ts">
  import { enhance } from '$app/forms';
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

  let data: { id: string } | { errors: QuestCallError[] } | undefined =
    undefined;
  $: errors = data && 'errors' in data ? data?.errors : undefined;

  let url: string;
</script>

<Quest
  {...$$restProps}
  class="absolute bottom-1 right-1 shadow-none before:hidden after:hidden hover:transform-none"
  style="--color: hsl(var(--color-red));"
>
  <span slot="points">Daily tweets</span>

  <div class="flex flex-col gap-8" slot="content">
    {#if tweets?.length}
      <div
        class="p flex max-h-[400px] flex-col overflow-y-auto bg-[#15202B] px-2"
      >
        {#each tweets as status (status.id)}
          <div class={cn('py-2', status.points && 'bg-brand-yellow/25')}>
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

    <form
      action="/api/quests?/call"
      class="flex flex-col gap-4"
      method="POST"
      use:enhance={async () => {
        data = undefined;
        return async ({ update, result }) => {
          await update();
          data = 'data' in result && result.data ? result.data : undefined;
          console.log({ result });
        };
      }}
    >
      {#if errors}
        {JSON.stringify(errors)}
      {:else}
        {JSON.stringify(data)}
      {/if}

      <input name="questId" type="hidden" value={id} />
      <input name="methodName" type="hidden" value="registerTweet" />

      <h2 class="sr-only">Add a tweet</h2>
      <p class="text-sm text-muted-foreground">
        Tweet not in the list? Add it here.
      </p>

      <p
        class="flex items-center justify-stretch bg-brand-red/80 text-brand-black"
      >
        <label class="px-2 text-sm text-brand-beige/75" for="url">Link:</label>

        <input
          class="my-0.5 min-w-0 flex-1 basis-full border-0 bg-brand-black/60 text-brand-beige placeholder:text-brand-beige/50"
          id="url"
          name="params[]"
          placeholder="https//x.com/{profile?.userName}/123…"
          type="text"
          bind:value={url}
        />

        <button
          class="mx-2 bg-brand-yellow px-2 font-bold uppercase transition hover:bg-brand-orange"
          disabled={!url}
          type="submit">Add</button
        >
      </p>
    </form>
  </div>
</Quest>
