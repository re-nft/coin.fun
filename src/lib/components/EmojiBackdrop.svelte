<script lang="ts">
  import { onMount } from 'svelte';

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

<div id="emoji-container" class="pointer-events-none fixed inset-0 z-[-1]">
  {#each emojiList as emoji (emoji.id)}
    <div
      class="emoji absolute will-change-transform"
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

<style>
  .emoji {
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
