<script lang="ts">
  import { onMount } from 'svelte';

  import { cn } from '$lib/utils/ui';

  let className: string | undefined = undefined;
  export { className as class };
  export let points = 0;

  let virtualPoints = points;

  onMount(() => {
    if (!points) return;

    let rafId: number | undefined;

    function updateEachSecond(time: number) {
      const seconds = Math.floor(time / 1000);
      virtualPoints = points + seconds;
      rafId = requestAnimationFrame(updateEachSecond);
    }

    rafId = requestAnimationFrame(updateEachSecond);
    return () => typeof rafId === 'number' && cancelAnimationFrame(rafId);
  });

  $: characters = String(virtualPoints).padStart(12, '0');
</script>

<div class={cn('inline-block', className)}>
  <div class="monospace points font-bold">
    {#each characters.split('') as char, index}
      <span
        class="char"
        data-char={char}
        style="
          animation-delay: {Math.round(Math.random() * (index * 200))}ms;
          animation-duration: {Math.round(Math.random() * 1000)}ms;
        ">{char}</span
      >
    {/each}
  </div>
  <div class="text-glow text-center">your points</div>
</div>

<style lang="postcss">
  .points {
    font-size: clamp(1.5rem, 8vw, 8rem);
  }

  .char {
    letter-spacing: 0.125em;
    display: inline-block;
    color: transparent;
    text-shadow: none;
    position: relative;

    &::before {
      @apply text-glow;

      position: absolute;
      height: 100%;
      width: 100%;
      left: 0;
      display: inline;
      color: white;
      animation: linear 2.5s reveal forwards;
      animation-delay: inherit;
      pointer-events: none;
    }

    &::before {
      top: 0;
      content: '•';
    }
  }

  @keyframes reveal {
    0% {
    }
    5% {
      content: '*';
    }
    10% {
      content: '•';
    }
    15% {
      content: '*';
    }
    20% {
      content: '•';
    }
    25% {
      content: '*';
    }
    30% {
      content: '•';
    }
    35% {
      content: '*';
    }
    40% {
      content: '•';
    }
    45% {
      content: '*';
    }
    50% {
      content: '•';
    }
    55% {
      content: '*';
    }
    60% {
      content: '•';
    }
    65% {
      content: '*';
    }
    70% {
      content: '•';
    }
    75% {
      content: '*';
    }
    80% {
      content: '•';
    }
    85% {
      content: '*';
    }
    90% {
      content: '•';
    }
    95% {
      content: '*';
    }
    100% {
      content: attr(data-char);
    }
  }
</style>
