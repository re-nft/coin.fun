<script lang="ts">
  import { cubicInOut } from 'svelte/easing';
  import { tweened } from 'svelte/motion';
  import { flip } from 'svelte/animate';
  export let division: number = 8;

  const spinningDivision = Array.from({ length: division }, (_, index) => ({
    index: index + 1,
    value: index * 1000
  }));

  let a;

  const handleSpin = async () => {
    const selectedItem =
      spinningDivision[Math.floor(Math.random() * spinningDivision.length)];
    const selectedItemFromPosition = 45 * selectedItem.index;
    const selectedItemToPosition = 360 + 45 - selectedItemFromPosition;
    console.log(selectedItemToPosition);
    a = selectedItemToPosition;
  };

  $: wheelSpin = a;
</script>

<div class="relative m-auto h-64 w-64">
  <div
    class="absolute inset-0 rounded-full border-2 border-[--color] transition-transform"
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
    class="absolute left-full top-1/2 h-6 w-6 -translate-y-1/2 text-black"
  >
    <img alt="" class="h-4 w-4" role="presentation" src="/logo.svg" />
  </div>
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
</style>
