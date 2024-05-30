<script lang="ts">
  import '../app.css';

  import { setContext } from 'svelte';

  import { createStore as createSolanaStore } from '$lib/solana';
  import { createStore as createUserStore } from '$lib/user';
  import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
  import { goto } from '$app/navigation';

  export let data;

  setContext('solana', createSolanaStore(data.solana));
  let user = createUserStore();
  setContext('user', user);

  async function handleSignOut() {
    await $user.disconnect?.();
    goto('/');
  }

  let hidden = true;
</script>

<nav>
  <a href="/">home</a>
  {#if !hidden}
    <a href="/leaderboard">leaderboard</a>
  {/if}
  <a href="/pointonomics">pointonomics</a>
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

<slot />

<!-- shadcn/ui for svelte does not have the nav component -->
<style>
  nav {
    background-color: var(--color-orange);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  nav a,
  span {
    color: black;
    text-decoration: none;
    padding: 10px 20px;
    font-size: 16px;
    transition: background-color 0.3s ease;
  }

  nav a:hover,
  span:hover {
    background-color: #02ad64;
  }
</style>
