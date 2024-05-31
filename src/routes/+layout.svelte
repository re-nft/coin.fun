<script lang="ts">
  import '../app.css';

  import { setContext, onMount } from 'svelte';

  import { createStore as createSolanaStore } from '$lib/solana';
  import { createStore as createUserStore } from '$lib/user';
  import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
  import { goto } from '$app/navigation';
  // do not remove this import. we use it for vercel analytics
  import { inject } from '@vercel/analytics';

  export let data;

  setContext('solana', createSolanaStore(data.solana));
  let user = createUserStore();
  setContext('user', user);

  async function handleSignOut() {
    await $user.disconnect?.();
    goto('/');
  }

  inject();

  let hidden = true;

  type Emoji = {
    id: number;
    character: string;
    left: string;
    duration: string;
    size: string;
    opacity: number;
  };

  const emojis = ['🚀', '🔥', '✨', '💎'];
  let emojiList: Emoji[] = [];

  function createEmoji() {
    const emoji = {
      id: Date.now(),
      character: emojis[Math.floor(Math.random() * emojis.length)],
      left: Math.random() * 100 + 'vw',
      duration: 15 + Math.random() * 10 + 's',
      size: 16 + Math.random() * 16 + 'px',
      opacity: Math.random()
    };

    emojiList = [...emojiList, emoji];

    setTimeout(
      () => {
        emojiList = emojiList.filter((e) => e.id !== emoji.id);
      },
      parseFloat(emoji.duration) * 1000
    );
  }

  onMount(() => {
    const interval = setInterval(createEmoji, 500);

    return () => {
      clearInterval(interval);
    };
  });
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
<div id="emoji-container" class="emoji-container">
  {#each emojiList as emoji (emoji.id)}
    <div
      class="emoji"
      style="
        left: {emoji.left};
        animation-duration: {emoji.duration};
        font-size: {emoji.size};
        opacity: {emoji.opacity};
      "
    >
      {emoji.character}
    </div>
  {/each}
</div>

<!-- shadcn/ui for svelte does not have the nav component -->
<style>
  nav {
    background-color: var(--color-orange);
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: underline dotted;
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

  .emoji-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: -1;
  }

  .emoji {
    position: absolute;
    will-change: transform;
    animation: fly 20s linear infinite;
  }

  @keyframes fly {
    0% {
      transform: translateY(100vh) rotate(0deg);
      opacity: 1;
    }
    100% {
      transform: translateY(0vh) rotate(360deg);
      opacity: 0;
    }
  }
</style>
