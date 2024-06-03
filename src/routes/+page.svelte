<script lang="ts">
  import CoinfunWordmark from '$lib/assets/coinfunwordmark.svg';
  import CoinAnimation from '$lib/components/CoinAnimation.svelte';
</script>

<div class="landing-page">
  <br />

  <img src={CoinfunWordmark} alt="coin.fun text" />
  <h1 class="martian-mono-extrabold glow" style="color: var(--color-orange);">
    Community Owned Memecoin Printer
  </h1>

  <CoinAnimation />

  <div class="progress-container" style="margin-top: 2em;">
    <!-- <h1 class="martian-mono-medium">Launch Progress</h1> -->
    <!-- <Progress value={progressValue} max={100} /> -->
    <br />
  </div>

  <br />

  <p>
    <span style="font-size: 2em; font-weight: 800;"
      >GET READY FOR <span class="highlight">SEASON 1</span></span
    >
    <br />
    🪙 CREATE MEMECOINS 🪙
    <br />
    ✨ EARN POINTS ✨
    <br />
    💸<span class="earn-all-fees"
      >EARN <strong style="font-size: 2em; text-decoration: underline;"
        >ALL</strong
      > THE TRADING FEES</span
    >💸
    <br />
    🤤 CREATE AND SHARE COIN.FUN MEMES ON TWITTER 🤤
    <br />
    ⁉️ CLICKITY CLICK THE COIN ⁉️
  </p>

  <br />
</div>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');

  .landing-page {
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
    position: relative;
    z-index: 1;
  }

  h1 {
    margin-bottom: 20px;
    font-size: 2em;
    text-transform: uppercase;
    animation: fadeIn 2s ease-in-out;
  }

  .progress-container {
    margin: 20px 0;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
