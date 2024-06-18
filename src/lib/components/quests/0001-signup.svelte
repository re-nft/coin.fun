<script lang="ts">
  import Quest from '$lib/components/Quest.svelte';
  import { Button } from '$lib/components/ui/button';
  import type { Profile } from '$lib/server/db';

  export let profile: Profile | undefined = undefined;
</script>

<Quest {...$$restProps}>
  <div class="flex flex-col gap-4" slot="content">
    {#if profile}
      <p>
        Hi, <a
          href={`https://x.com/${profile.userName}`}
          rel="noopener nofollow noreferrer"
          target="_blank"
        >
          <img
            alt=""
            class="inline size-8 rounded-full align-middle"
            src={profile.avatar}
          />
          @{profile.userName}</a
        >! You are ready to ligma.
      </p>
    {:else}
      Prove your Xness. Connect to Twitter.
    {/if}
  </div>

  <svelte:fragment slot="footer">
    {#if profile}
      <Button href="/api/twitter/sign-out">Sign Out</Button>
    {:else}
      <Button href="/api/twitter/sign-in">Sign In</Button>
    {/if}
  </svelte:fragment>
</Quest>
