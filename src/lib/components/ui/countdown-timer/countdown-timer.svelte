<script lang="ts">
  import { onDestroy, onMount } from 'svelte';

  export let acquiredAt: number;

  const date = new Date(acquiredAt);

  let now = date.getTime();
  let end = now + 86400000;

  $: count = Math.round((end - now) / 1000);
  $: h = Math.floor(count / 3600);
  $: m = Math.floor((count - h * 3600) / 60);
  $: s = count - h * 3600 - m * 60;

  function updateTimer() {
    now = Date.now();
  }

  let interval = setInterval(updateTimer, 1000);
  $: if (count === 0) clearInterval(interval);

  onMount(() => {
    interval = setInterval(updateTimer, 1000);
  });

  onDestroy(() => {
    clearInterval(interval);
  });
</script>

<span class="text-brand-red"
  >{#each Object.entries({ h, m, s }) as [key, value], i}
    <span>{String(value).padStart(2, '0')}</span><span>{key}</span>
  {/each}</span
>
