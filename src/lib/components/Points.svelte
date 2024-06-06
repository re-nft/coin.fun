<script lang="ts">
  import { cn } from '$lib/utils/ui';

  let className: string | undefined = undefined;
  export { className as class };
  export let points = 0;

  $: characters = new Intl.NumberFormat('en').format(points).padStart(8, '0');
</script>

<div class={cn('inline-block', className)}>
  <div class="monospace text-4xl font-bold">
    {#each characters.split('') as char, index}
      <span
        data-char={char}
        style="
          animation-delay: {Math.round(Math.random() * (index * 200))}ms;
          animation-duration: {Math.round(Math.random() * 1000)}ms;
        ">{char}</span
      >
    {/each}
  </div>
  <div class="glow px-1 text-right">points</div>
</div>

<style lang="postcss">
  span {
    letter-spacing: 0.125em;
    display: inline-block;
    color: transparent;
    text-shadow: none;
    position: relative;

    &::before {
      text-shadow:
        0 0 5px var(--color-green),
        0 0 10px var(--color-green),
        0 0 15px var(--color-green),
        0 0 20px var(--color-green),
        0 0 25px var(--color-green),
        0 0 30px var(--color-green),
        0 0 35px var(--color-green);
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
