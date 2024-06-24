<script lang="ts">
  import { Button } from '$lib/components/ui/button';
  import { expoInOut } from 'svelte/easing';
  import { tweened } from 'svelte/motion';
  export let division: number = 8;

  const spinningDivision = Array.from({ length: division }, (_, index) => ({
    index: index + 1,
    value: index * 1000
  }));

  const progress = tweened(0, {
    duration: 4000,
    easing: expoInOut
  });

  let spinnTo = 0;

  const handleSpin = async () => {
    if ($progress === 1) return;

    const selectedItem =
      spinningDivision[Math.floor(Math.random() * spinningDivision.length)];
    const selectedItemFromPosition = 45 * selectedItem.index;
    const selectedItemToPosition = 360 - (selectedItemFromPosition - 45) + 24.5;
    spinnTo = selectedItemToPosition;

    await progress.set(1);
  };

  $: wheelSpin = $progress ? $progress * 3600 + spinnTo : 0;
</script>

<div class="relative m-auto h-64 w-64 p-8">
  <div
    class="absolute inset-0 rounded-full border-2 border-[--color] transition-transform will-change-transform"
    style="transform: rotate({wheelSpin}deg)"
  >
    {#each spinningDivision as division}
      <span
        class="absolute left-[calc(50%-1px)] h-full w-0.5 bg-[--color]"
        style="transform: rotate(calc(45deg * {division.index}))"
      ></span>
    {/each}
    <div class="absolute inset-0 rotate-[22.5deg]">
      {#each spinningDivision as division}
        <b
          class="absolute inset-3 text-center"
          style="transform: rotate(calc(45deg * {division.index}))"
          >{division.value}</b
        >
      {/each}
    </div>
  </div>
  <div
    on:click={handleSpin}
    class="btn group absolute inset-0 m-auto flex cursor-pointer select-none items-center justify-center rounded-full text-sm"
  >
    <img
      alt=""
      class="size-12 group-hover:animate-wiggle"
      role="presentation"
      src="/logo.svg"
    />
  </div>
  <div
    on:click={handleSpin}
    class="triangle absolute left-full top-1/2 h-0 h-6 w-0 w-6 -translate-y-1/2 border-transparent text-black"
  ></div>
</div>
<div class="p-8">
  <Button disabled={$progress === 1} on:click={handleSpin}>Spin</Button>
</div>

<style>
  .btn {
    animation: linear 0.2s tilt-n-move-shaking;
    animation-delay: inherit;
  }
  @keyframes tilt-n-move-shaking {
    0% {
      transform: translate(0, 0) rotate(0deg);
    }
    25% {
      transform: translate(5px, 5px) rotate(5deg);
    }
    50% {
      transform: translate(0, 0) rotate(0eg);
    }
    75% {
      transform: translate(-5px, 5px) rotate(-5deg);
    }
    100% {
      transform: translate(0, 0) rotate(0deg);
    }
  }

  .triangle {
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;

    border-right: 20px solid var(--color);
  }
</style>
