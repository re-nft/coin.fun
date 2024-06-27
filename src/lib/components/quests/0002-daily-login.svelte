<script lang="ts">
  import { enhance } from '$app/forms';
  import Quest from '$lib/components/Quest.svelte';
  import { Button } from '$lib/components/ui/button';
  import type { QuestStatus } from '$lib/quests';
  import { onMount } from 'svelte';

  let spinning = false;
  let selectedNumber = -1;
  let rotationDegrees = 0;

  function spinWheel() {
    if (spinning) return;
    spinning = true;
    const randomRotations = 2 + Math.random() * 3; // 2 to 5 rotations
    const additionalDegrees = Math.random() * 360; // Random additional rotation
    const totalRotation = randomRotations * 360 + additionalDegrees;
    rotationDegrees += totalRotation;
    
    setTimeout(() => {
      spinning = false;
      // Calculate the selected number based on final position
      selectedNumber = Math.floor((360 - (rotationDegrees % 360)) / 45) % 8;
    }, 3000);
  }

  export let id: string;
  export let status: QuestStatus;

  let submitting = false;
</script>

<Quest {...$$restProps} {status}>
  <div class="flex flex-col gap-4 p-8" slot="content">
    {#if status === 'done'}
      <p>Filled your bag.</p>
      <p>
        <img
          alt="Fuck you and I'll see you tomorrow."
          src="https://media1.tenor.com/m/zxgvSk50wXIAAAAC/see-you-tomorrow-fuck-you.gif"
        />
      </p>
    {:else if status === 'available'}
    <div class="flex flex-col items-center gap-4">
      <div class="relative w-[200px] h-[200px]">
        <svg viewBox="0 0 100 100" width="200" height="200" class="absolute">
          <g transform={`rotate(${rotationDegrees} 50 50)`} 
             style="transition: transform 3s cubic-bezier(0.25, 0.1, 0.25, 1);">
            {#each Array(8) as _, i}
              <g transform={`rotate(${i * 45} 50 50)`}>
                <path
                  d="M50 50 L50 10 A40 40 0 0 1 83.4 25 Z"
                  fill={i === selectedNumber ? '#FFD700' : '#E0E0E0'}
                  stroke="black"
                />
                <text
                  x="50"
                  y="25"
                  text-anchor="middle"
                  dominant-baseline="middle"
                  transform="rotate({-i * 45} 50 25)"
                >
                  {i}
                </text>
              </g>
            {/each}
          </g>
        </svg>
        <!-- Pointer at the top -->
        <div class="absolute top-0 left-1/2 transform -translate-x-1/2 w-0 h-0 
                    border-l-[10px] border-l-transparent
                    border-r-[10px] border-r-transparent
                    border-b-[20px] border-b-red-500"></div>
      </div>
      <button
        on:click={spinWheel}
        disabled={spinning}
        class="text-2xl font-bold p-2 bg-blue-500 text-white rounded-full disabled:bg-gray-300"
      >
        {spinning ? 'Spinning...' : 'Spin'}
      </button>
      {#if selectedNumber !== -1}
        <p>Landed on: {selectedNumber}</p>
      {/if}
    </div>
    {:else}
      <p>Check in daily to earn, anon.</p>
    {/if}
  </div>
</Quest>
