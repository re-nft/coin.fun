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
</script>

<nav>
  <a href="/">home</a>
  <a href="/leaderboard">leaderboard</a>
  <a href="/pointonomics">pointonomics</a>
  {#if $user.isConnected}
    <span>
      <DropdownMenu.Root>
        <!-- if user is not connected, will show "sign in" and on click will invoke web3auth-->
        <!-- if user is connected, will show "my account" and will act as a dropdown -->
        <DropdownMenu.Trigger>my account</DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Group>
            <DropdownMenu.Item href="/myprofile">settings</DropdownMenu.Item>
            <DropdownMenu.Item on:click={handleSignOut}
              >sign out</DropdownMenu.Item
            >
          </DropdownMenu.Group>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </span>
  {:else}
    <button on:click={() => $user.connect?.()} type="button">sign in</button>
  {/if}
</nav>

<slot />

<!-- shadcn/ui for svelte does not have the nav component -->
<style>
  nav {
    background-color: #000;
    padding: 10px;
    display: flex;
    justify-content: space-around;
  }

  nav a,
  span,
  button {
    color: white;
    text-decoration: none;
    padding: 10px 20px;
    font-size: 16px;
    transition: background-color 0.3s ease;
  }

  nav a:hover,
  span:hover,
  button:hover {
    background-color: #fff000;
  }
</style>
