<script lang="ts">
  import { getContext } from 'svelte';

  import { goto } from '$app/navigation';
  import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
  import type { UserContext } from '$lib/user';

  let hidden = true;
  let user = getContext<UserContext>('user');

  async function handleSignOut() {
    await $user.disconnect?.();
    goto('/');
  }
</script>

<nav>
  <a href="/">home</a>
  {#if !hidden}
    <a href="/leaderboard">leaderboard</a>
  {/if}
  <a href="/tokenomics">earn points</a>
  {#if !hidden}
    <span style="cursor: pointer;">
      <DropdownMenu.Root>
        <!-- if user is not connected, will show "sign in" and on click will invoke web3auth-->
        <!-- if user is connected, will show "my account" and will act as a dropdown -->
        <DropdownMenu.Trigger>my account</DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Group>
            {#if $user.isConnected}
              <DropdownMenu.Item href="/myprofile">settings</DropdownMenu.Item>
              <DropdownMenu.Item on:click={handleSignOut}
                >sign out</DropdownMenu.Item
              >
            {:else}
              <DropdownMenu.Item
                on:click={() => $user.connect?.()}
                type="button">sign in</DropdownMenu.Item
              >
            {/if}
          </DropdownMenu.Group>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </span>
  {/if}
</nav>

<style lang="postcss">
  /* TODO: We should probably move color definitions into the tailwind config. */
  nav {
    @apply flex items-center justify-center bg-[--color-orange] underline decoration-dotted;
  }

  a,
  span {
    @apply px-5 py-2.5 text-black transition;
  }

  :hover:is(a, span) {
    background-color: #02ad64;
  }
</style>
