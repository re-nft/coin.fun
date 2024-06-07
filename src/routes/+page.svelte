<script lang="ts">
  import CoinfunWordmark from '$lib/assets/coinfunwordmark.svg';
  import CoinAnimation from '$lib/components/CoinAnimation.svelte';
  import { Button } from '$lib/components/ui/button';
</script>

<h1
  class="martian-mono-extrabold glow mx-auto mt-20 max-w-screen-md text-center text-3xl uppercase"
  style="color: var(--color-orange);"
>
  <img src={CoinfunWordmark} alt="coin.fun" />
  Community Owned Memecoin Printer
</h1>

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

<p class="text-center">
  <Button href="/quests">Do quests. Get points.</Button>
</p>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');

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
