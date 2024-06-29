<script lang="ts">
  import { cn } from '$lib/utils/ui';

  export let spin: number;
  export let points: number;
  export let wheelSection: number;
  export let spinningDivision: number[];
</script>

<div class="relative m-auto size-64 p-8">
  <div
    class="absolute inset-0 overflow-hidden rounded-full border-2 border-[--color] transition-transform will-change-transform"
    style="transform: rotate({spin}deg)"
  >
    {#each spinningDivision as _, index}
      <span
        class="absolute left-[calc(50%-1px)] h-full w-0.5 bg-[--color]"
        style="transform: rotate(calc({wheelSection} * {index}deg))"
      ></span>
    {/each}
    <div
      class="absolute inset-0 rotate-[{wheelSection / 2}deg]"
      style="transform: rotate({wheelSection / 2}deg)"
    >
      {#each spinningDivision as division, index}
        <b
          class={cn('absolute inset-3 text-center text-sm transition-colors', {
            'text-brand-red': division === points
          })}
          style="transform: rotate(calc({wheelSection} * {index}deg))"
          >{division}</b
        >
      {/each}
    </div>
  </div>
  <button
    on:click|preventDefault
    class="btn group absolute inset-0 m-auto flex cursor-pointer select-none items-center justify-center rounded-full text-sm"
  >
    <img
      alt=""
      class="size-12 group-hover:animate-wiggle"
      role="presentation"
      src="/logo.svg"
    />
  </button>
  <div
    class="absolute left-full top-1/2 flex -translate-y-1/2 border-transparent"
  >
    <div class="triangle h-0 w-0 rounded"></div>
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

  .triangle {
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;

    border-right: 20px solid var(--color);
  }
</style>
