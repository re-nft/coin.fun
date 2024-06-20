<script lang="ts">
  import { onMount } from 'svelte';

  import CoinAnimation from '$lib/components/CoinAnimation.svelte';
  import PageMeta from '$lib/components/PageMeta.svelte';
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

<PageMeta
  title="Coin.fun - Community Owned Memecoin Printer"
  description="Welcome to the $COIN jungle, ape! YOLO into the memecoin casino where degens moon or get REKT. Gib gains or cry harder!"
  keywords="memecoin, ape, degen, moon, REKT, YOLO, Lambo, gains, pump, dump, $COIN, cry harder"
/>

<div class="flex min-h-screen w-full flex-col md:flex-row">
  <!-- Left column -->
  <div
    class="flex flex-1 flex-col items-center justify-center p-4 md:w-1/2 md:p-8 gap-8"
  >
    <div class="w-full max-w-2xl">
      <h1 class="text-center font-mono">
        <span
          class="text-glow-green block text-center text-[clamp(3rem,8vw,6rem)] lowercase leading-tight text-primary"
        >
          coin.fun
        </span>
        <span
          class="text-glow-green block text-center text-2xl uppercase md:text-3xl"
        >
          Community Owned Memecoin Printer
        </span>
      </h1>

      <div class="mt-8 flex justify-center">
        <Button
          class="font-bold uppercase hover:animate-nutty"
          size="lg"
          href="/quests"
        >
          EARN $COIN TOKEN
        </Button>
      </div>

      <CoinAnimation class="mx-auto mt-8 w-full" />
    </div>
  </div>

  <!-- Right column -->
  <div
    class="flex flex-1 flex-col items-center justify-center p-4 md:w-1/2 md:p-8"
  >
    <div class="w-full max-w-2xl">
      <p class="text-center text-4xl font-bold md:text-left">
        <span class="highlight">SEASON 1</span> is LIVE!
      </p>

      <ul class="mt-8 space-y-6 text-center text-xl md:text-left">
        <li>
          <strong class="text-2xl underline"
            >SIMPLY SIGN IN WITH TWITTER AND:</strong
          >
        </li>
        <li>✨ EARN POINTS ✨</li>
        <li>🪙 POINTS = $COIN token 🪙</li>
        <li>
          💸 <span class="earn-all-fees">
            $COIN accrues <strong class="text-2xl underline"
              >TRADING FEES</strong
            >
          </span> 💸
        </li>
        <li>🤤 CREATE AND SHARE COIN.FUN MEMES ON TWITTER 🤤</li>
      </ul>
    </div>
  </div>
</div>

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

