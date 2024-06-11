<script lang="ts">
  import { onMount } from 'svelte';

  import CoinfunWordmark from '$lib/assets/coinfunwordmark.svg';
  import CoinAnimation from '$lib/components/CoinAnimation.svelte';
  import { Button } from '$lib/components/ui/button';

  const LABEL_QUESTS = '- Do quests -';
  const LABEL_POINTS = '- Get points -';

  let label = LABEL_QUESTS;

  onMount(() => {
    function changeLabel() {
      label = label === LABEL_POINTS ? LABEL_QUESTS : LABEL_POINTS;
    }

    const intervalId = setInterval(changeLabel, 750);
    return () => clearInterval(intervalId);
  });
</script>

<h1
  class="text-glow mx-auto my-20 max-w-screen-md text-center font-mono text-3xl font-extrabold uppercase"
  style="color: var(--color-orange);"
>
  <img src={CoinfunWordmark} alt="coin.fun" />
  Community Owned Memecoin Printer
</h1>

<p class="group mx-auto max-w-min text-center">
  <Button
    class="font-bold uppercase group-hover:animate-nutty"
    size="lg"
    href="/quests"
  >
    {label}
  </Button>
</p>

<CoinAnimation class="mx-auto my-20 w-full max-w-screen-sm" />

<p class="mb-4 text-center text-3xl font-bold">
  GET READY FOR <span class="highlight">SEASON 1</span>
</p>

<ul class="mb-20 text-center">
  <li>🪙 CREATE MEMECOINS 🪙</li>
  <li>✨ EARN POINTS ✨</li>
  <li>
    💸 <span class="earn-all-fees"
      >EARN <strong style="font-size: 2em; text-decoration: underline;"
        >ALL</strong
      > THE TRADING FEES</span
    > 💸
  </li>
  <li>🤤 CREATE AND SHARE COIN.FUN MEMES ON TWITTER 🤤</li>
  <li>⁉️ CLICKITY CLICK THE COIN ⁉️</li>
</ul>

<style>
  h1 {
    animation: fadeIn 2s ease-in-out;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>
