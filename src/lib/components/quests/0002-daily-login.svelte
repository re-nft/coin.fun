<script lang="ts">
  import { enhance } from '$app/forms';
  import Quest from '$lib/components/Quest.svelte';
  import { Button } from '$lib/components/ui/button';
  import { CountdownTimer } from '$lib/components/ui/countdown-timer';
  import { SpinningWheel } from '$lib/components/ui/spinning-wheel';
  import type { QuestStatus } from '$lib/quests';
  import { useSpinner } from '$lib/utils/ui';
  import { Sound } from 'svelte-sound';
  import SpinningWheelSound from '$lib/assets/spinning-wheel-sound.wav';

  export let id: string;
  export let status: QuestStatus;
  export let points: number;
  export let spinPointsIdx: number;
  export let spinningDivision: number[] = [];

  const rotationSound = new Sound(SpinningWheelSound);

  const {
    start: startRotation,
    wheelSection,
    ...spin
  } = useSpinner(spinningDivision.length, spinPointsIdx);

  let form: HTMLFormElement;
  let isSpinning = false;

  const handleSpin = async () => {
    if (!!points || status === 'done') {
      return;
    }

    isSpinning = true;
    rotationSound.play();
    await startRotation();
    form.requestSubmit();
  };

  $: rotateValue = status === 'available' && !isSpinning ? 0 : $spin;
  $: inxValue = status === 'available' ? null : spinPointsIdx;
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
          rotationSound.stop();
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
        {:else if status === 'locked'}
          Sign in for daily spin revards
        {:else}
          Filled your bag! <br /> Try next time in <br /> <CountdownTimer />
        {/if}
      </div>

      <input name="questId" type="hidden" value={id} />
      <input name="methodName" type="hidden" value="complete" />
    </form>
  </div>
</Quest>
