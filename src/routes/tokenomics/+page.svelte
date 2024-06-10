<script lang="ts">
  import Hefties from '$lib/assets/Hefties.svg';
  import Normies from '$lib/assets/Normies.svg';
  import Chads from '$lib/assets/Chads.svg';
  import PieChart from '$lib/assets/coin-fun-pie-chart.mp4';
</script>

<div class="tokenomics">
  <p>
    There will be a total of <span
      class="martian-mono-medium glow"
      style="font-size: 1.5em;">420,690,000,000</span
    > tokens, which shall be distributed via points system. Points do not map 1:1
    to tokens.
  </p>

  <br />

  <p>
    There are three playable characters who we shall uplift through this one of
    a <strong style="font-weight: 800;"
      >kind kombucha chakra unlocking third eye awakening degenerate trading
      experience</strong
    >
  </p>

  <br />

  <section id="playable-characters">
    <a href="#playable-characters" class="heading-link">
      <h1 class="martian-mono-extrabold glow" style="font-size: 1.5em;">
        <span class="anchor-link"> # </span>
        playable characters
      </h1>
    </a>

    <div>
      <div class="row">
        <div class="column-left">
          <span class="martian-mono-medium playable-character">Hefties</span>
          - 20k+ twitter followers
          <br />
          - learned the dark arts of X algorithm
          <br />
          - buying APs, driving Lambos, bonking, floking
          <br />
          - life is a movie
        </div>
        <div class="column">
          <img class="w-48" src={Hefties} alt="fat coin" />
        </div>
      </div>

      <div class="row">
        <div class="column-left">
          <span class="martian-mono-medium playable-character">Normies</span>
          - sells their kids and one kidney to load up on latest shills they read
          about on twitter
          <br />
          - bets on hamster races
        </div>
        <div class="column">
          <div><img class="w-48" src={Normies} alt="normal coin" /></div>
        </div>
      </div>

      <div class="row">
        <div class="column-left">
          <span class="martian-mono-medium playable-character">Chads</span>
          - create memecoins on coin.fun
          <br />
          - trade on coin.fun
          <br />
          - really ran out of ideas on this one. it is what it is
        </div>
        <div class="column">
          <img class="w-48" src={Chads} alt="sunglasses coin" />
        </div>
      </div>
    </div>
  </section>

  <section id="points-distribution">
    <a href="#points-distribution" class="heading-link">
      <h1 class="martian-mono-extrabold glow" style="font-size: 1.5em;">
        <span class="anchor-link"> # </span>
        <span style="text-decoration: line-through;">Token</span> Points Distribution
      </h1>
    </a>

    <p>
      80% of all the points will go to players. The rest will go to coin.fun
      team.
    </p>
    <div style="display: flex; justify-content: center; margin: 2em;">
      <video autoplay muted controls width="500">
        <track kind="captions" />
        <!-- <source src="/media/cc0-videos/flower.webm" type="video/webm" /> -->
        <source src={PieChart} type="video/mp4" />
      </video>
    </div>
    <!-- <p>Holders of the following collections get 50% boost to their points:</p> -->
    <!-- <p style="text-align: center;"> -->
    <!--   <br /> -->
    <!--   <span> -->
    <!--     <strong -->
    <!--       ><a -->
    <!--         href="https://opensea.io/collection/renftlabs" -->
    <!--         target="_blank" -->
    <!--         style="cursor: pointer;">021 cats</a -->
    <!--       ></strong -->
    <!--     > -->
    <!--     <br /> -->
    <!--     <strong -->
    <!--       ><a -->
    <!--         href="https://opensea.io/collection/rumble-kong-league" -->
    <!--         style="cursor: pointer;" -->
    <!--         target="_blank">rumble kongs</a -->
    <!--       ></strong -->
    <!--     > -->
    <!--   </span> -->
    <!-- </p> -->
    <!-- <p> -->
    <!--   <br /> -->
    <!--   If you hold NFTs from both of the above, you get 100% boost to your points. -->
    <!--   The more NFTs you hold the higher the boost. TODO: provide a formula. To qualify, -->
    <!--   write a message in #nft-multiplier-verification on discord (TODO: invite link -->
    <!--   here). -->
    <!---->
    <!--   <strong -->
    <!--     >You will have to hold the NFT for the duration of the season to be -->
    <!--     eligible for your boost.</strong -->
    <!--   > -->
    <!-- </p> -->
  </section>

  <section id="how-to-earn-points">
    <a href="#how-to-earn-points" class="heading-link">
      <h1 class="martian-mono-extrabold glow">
        <span class="anchor-link">#</span>
        how to earn points
      </h1>
    </a>

    <p>
      Anyone is able to earn points through quests. Outside of quests, normies
      will create memes and hefites pick which ones they like and retweet /
      quote tweet. A meme must contain "$COIN" and "coin.fun" keywords. Tagging
      a heftie in a meme disqualifies it.
    </p>

    <br />
    <p>
      The starting split between the 3 player groups is 35% hefties, 25% normies
      and 40% chads.
      <br />
      Do not forget that each app user may be in more than one player group. Main
      objectives of each group are:

      <br />
      <br />

      1/ Hefties - sign in with twitter on coin.fun app.
      <a
        href="https://x.com/coindotfun"
        target="_blank"
        style="text-decoration: underline;">DM us on Twitter</a
      >
      so that we know to check your tweets. The more engaging your tweets about coin.fun
      the higher share of points you will be assigned. We will assess likes, retweets
      and comments. Include the links to your tweets in your questing dashboard.

      <br />
      <br />

      2/ Normies - connect your twiter account in the "My Account". Include
      links to your memes in the questing system.
      <br />
      <br />

      3/ Chads - when trading goes live: trade the coins. Make new coins.
    </p>
  </section>

  <br />
</div>

<style>
  .tokenomics {
    max-width: 64em;
    margin: 2em auto;
  }

  .row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
  }

  .column {
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;
    justify-content: center;
    align-items: center;
  }

  .column-left {
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;
    justify-content: center;
    align-items: flex-start;
    text-align: left;
  }

  h1 {
    text-align: center;
    margin-top: 2em;
    margin-bottom: 1em;
    font-size: 2em;
    position: relative; /* Ensure the heading is positioned relative to itself */
    cursor: pointer; /* Change cursor for the entire heading */
  }

  .heading-link {
    text-decoration: none;
    color: inherit;
  }

  .anchor-link {
    display: none; /* Initially hide the anchor link */
    font-size: 1em; /* Match the size of the heading */
    text-decoration: none;
    opacity: 0.7;
  }

  h1:hover .anchor-link {
    display: inline; /* Show the anchor link on hover */
  }

  .playable-character {
    font-size: 1.15em;
    text-decoration: underline;
    font-weight: 800;
  }

  section {
    position: relative;
  }
</style>
