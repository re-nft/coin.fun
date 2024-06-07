<script lang="ts">
  import type { Session } from '@supabase/supabase-js';

  import Quest from '$lib/components/Quest.svelte';
  import { Button } from '$lib/components/ui/button';

  export let userData: { avatar: string | null; userName: string } | undefined =
    undefined;
  export let session: Session | null = null;
</script>

<Quest {...$$restProps} title="Quest 1">
  <div class="flex flex-col gap-4" slot="content">
    {#if userData}
      <p>
        Hi, <a href={`https://x.com/${userData.userName}`}>
          <img
            alt=""
            class="inline size-8 rounded-full align-middle"
            src={userData.avatar}
          />
          @{userData.userName}</a
        >!
      </p>
      <p>Nice to see you connected.</p>
    {:else}
      Prove your Xness. Connect to Twitter.
    {/if}
  </div>

  <svelte:fragment slot="footer">
    {#if session}
      <Button href="/api/twitter/sign-out">Sign Out</Button>
    {:else}
      <Button href="/api/twitter/sign-in">Sign In</Button>
    {/if}
  </svelte:fragment>
</Quest>
