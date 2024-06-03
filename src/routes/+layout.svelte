<script lang="ts">
  import '../app.css';

  // do not remove this import. we use it for vercel analytics
  import { inject } from '@vercel/analytics';
  import { onMount, setContext } from 'svelte';

  import Navigation from '$lib/components/Navigation.svelte';
  import { createStore as createSolanaStore } from '$lib/solana';
  import { createStore as createUserStore } from '$lib/user';

  export let data;

  setContext('solana', createSolanaStore(data.solana));
  let user = createUserStore();
  setContext('user', user);

  inject();

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

<Navigation />

<main class="container">
  <slot />
</main>

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
