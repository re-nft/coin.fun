<script lang="ts">
  import { cn } from '$lib/utils/ui';

  type SpinItem = {
    index: number;
    value: number;
  };

  export let division: number = 8;
  export let spin: number;
  export let selectedIndex;
  export let wheelSection: number;
  export let spinningDivision: SpinItem[];
</script>

<div class="relative m-auto h-64 w-64 p-8">
  <div
    class="absolute inset-0 rounded-full border-2 border-[--color] transition-transform will-change-transform"
    style="transform: rotate({spin}deg)"
  >
    {#each spinningDivision as division}
      <span
        class="absolute left-[calc(50%-1px)] h-full w-0.5 bg-[--color]"
        style="transform: rotate(calc({wheelSection} * {division.index}deg))"
      ></span>
    {/each}
    <div
      class="absolute inset-0 rotate-[{wheelSection / 2}deg]"
      style="transform: rotate({wheelSection / 2}deg)"
    >
      {#each spinningDivision as division}
        <b
          class={cn('absolute inset-3 text-center text-sm', {
            'text-brand-red': division.index === selectedIndex
          })}
          style="transform: rotate(calc({wheelSection} * {division.index}deg))"
          >{division.value}</b
        >
      {/each}
    </div>
  </div>
  <div
    on:click
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
    class="triangle absolute left-full top-1/2 h-0 w-0 -translate-y-1/2 border-transparent text-black"
  ></div>
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
