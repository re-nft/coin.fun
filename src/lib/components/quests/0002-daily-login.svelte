<script lang="ts">
  import { enhance } from '$app/forms';
  import Quest from '$lib/components/Quest.svelte';
  import { Button } from '$lib/components/ui/button';
  import { SpinningWheel } from '$lib/components/ui/spinning-wheel';
  import type { QuestStatus } from '$lib/quests';
  import { spinner } from '$lib/utils/ui';
  import SpinningWheelSound from '$lib/assets/spinning-wheel-sound.m4a';

  export let id: string;
  export let status: QuestStatus;

  const division = 8;
  let points = 0;
  let form: HTMLFormElement;
  let spinning = false;
  let { start, selectedIndex, wheelSection, ...spin } = spinner(division);
  const spinningDivision = Array.from({ length: division }, (_, index) => ({
    index: index + 1,
    value: (index + 1) * 10000
  }));

  console.log(status);

  const handleSpin = async () => {
    spinning = true;
    await start();
    points = spinningDivision.find(
      (item) => item.index === selectedIndex
    )?.value;
    form.requestSubmit();
    spinning = false;
  };
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
        };
      }}
    >
      <SpinningWheel
        spin={$spin}
        {selectedIndex}
        {wheelSection}
        {division}
        {spinningDivision}
        on:click={handleSpin}
      />
      <div class="p-8">
        {#if status === 'available'}
          <Button disabled={spinning} on:click={handleSpin}>Spin</Button>
        {/if}
      </div>

      <input name="questId" type="hidden" value={id} />
      <input name="points" type="hidden" value={points} />
      <input name="methodName" type="hidden" value="complete" />
    </form>
  </div>
</Quest>
