<script lang="ts">
  import { enhance } from '$app/forms';
  import Quest from '$lib/components/Quest.svelte';
  import { Button } from '$lib/components/ui/button';
  import { CountdownTimer } from '$lib/components/ui/countdown-timer';
  import { SpinningWheel } from '$lib/components/ui/spinning-wheel';
  import type { QuestStatus } from '$lib/quests';
  import { useSpinner } from '$lib/utils/ui';
  import { Sound } from 'svelte-sound';
  import SpinningWheelSound from '$lib/assets/spinning-wheel-sound.m4a';

  export let id: string;
  export let status: QuestStatus;
  export let points: number;
  export let spinPointsIdx: number;

  const rotationSound = new Sound(SpinningWheelSound);

  const division = 8;
  const {
    start: startRotation,
    wheelSection,
    ...spin
  } = useSpinner(division, spinPointsIdx);

  let form: HTMLFormElement;
  let isSpinning = false;
  const spinningDivision = [
    10000, 30000, 40000, 50000, 60000, 70000, 80000, 100000
  ];

  const handleSpin = async () => {
    if (!!points || status === 'done') {
      return;
    }

    rotationSound.play();
    isSpinning = true;
    await startRotation();
    form.requestSubmit();
  };

  $: rotateValue = status === 'available' && !isSpinning ? 0 : $spin;
  $: inxValue = status === 'available' && !isSpinning ? null : spinPointsIdx;
</script>

<Quest {...$$restProps} {status} {points}>
  <div class="flex flex-col gap-4" slot="content">
    <form
      bind:this={form}
      action="/api/quests?/call"
      method="POST"
      use:enhance={() => {
        return async ({ update }) => {
          await update();
          isSpinning = false;
        };
      }}
    >
      <SpinningWheel
        spin={rotateValue}
        {wheelSection}
        spinPointsIdx={inxValue}
        {spinningDivision}
        on:click={handleSpin}
      />
      <div class="p-8">
        {#if status === 'available'}
          <Button disabled={isSpinning} on:click={handleSpin}>Spin</Button>
        {:else}
          Filled your bag! <br /> Try next time in <br /> <CountdownTimer />
        {/if}
      </div>

      <input name="questId" type="hidden" value={id} />
      <input
        type="hidden"
        id="points"
        name="params[]"
        value={spinningDivision[spinPointsIdx]}
      />
      <input name="methodName" type="hidden" value="complete" />
    </form>
  </div>
</Quest>
