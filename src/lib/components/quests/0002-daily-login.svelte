<script lang="ts">
  import { enhance } from '$app/forms';
  import Quest from '$lib/components/Quest.svelte';
  import { Button } from '$lib/components/ui/button';
  import { CountdownTimer } from '$lib/components/ui/countdown-timer';
  import { SpinningWheel } from '$lib/components/ui/spinning-wheel';
  import type { QuestStatus } from '$lib/quests';
  import { useSpinner } from '$lib/utils/ui';
  import SpinningWheelSound from '$lib/assets/spinning-wheel-sound.wav';

  export let id: string;
  export let status: QuestStatus;
  export let points: number;
  export let spinPointsIdx: number;
  export let spinningDivision: number[] = [];
  export let acquiredAt;

  let audio: HTMLAudioElement;

  const {
    start: startRotation,
    wheelSection,
    ...spin
  } = useSpinner(spinningDivision.length, spinPointsIdx);

  let form: HTMLFormElement;
  let isSpinning = false;
  let isRequesting = false;

  const handleSpin = async () => {
    if (!!points || status !== 'available') {
      return;
    }

    form.requestSubmit();
  };

  $: isAnimating = isSpinning || isRequesting;
  $: rotateValue = status === 'available' && !isSpinning ? 0 : $spin;
  $: pointsValue = !isAnimating ? points : 0;
</script>

<Quest {...$$restProps} {status} points={pointsValue}>
  <div class="flex flex-col gap-4" slot="content">
    <form
      bind:this={form}
      action="/api/quests?/call"
      method="POST"
      use:enhance={() => {
        isSpinning = true;
        audio.play();
        startRotation(() => (isSpinning = false));

        return async ({ update }) => {
          isRequesting = true;
          await update();
          isRequesting = false;
        };
      }}
    >
      <SpinningWheel
        spin={rotateValue}
        {wheelSection}
        points={pointsValue}
        {spinningDivision}
        on:click={handleSpin}
      />
      <div class="p-8">
        {#if status === 'available' || isAnimating}
          <Button disabled={isSpinning} on:click={handleSpin}>Spin</Button>
        {:else if status === 'locked'}
          Sign in for daily spin revards
        {:else}
          Filled your bag! <br /> Try next time in <br />
          <CountdownTimer {acquiredAt} />
        {/if}
      </div>

      <input name="questId" type="hidden" value={id} />
      <input name="methodName" type="hidden" value="complete" />
    </form>
  </div>
</Quest>
<audio class="hidden" src={SpinningWheelSound} bind:this={audio}></audio>
