<script lang="ts">
  import Hefties from '$lib/assets/Hefties.svg';
  import Normies from '$lib/assets/Normies.svg';
  // import Zombies from '$lib/assets/Zombies.svg';
  import Chads from '$lib/assets/Chads.svg';
  import PieChart from '$lib/assets/coin-fun-pie-chart.mp4';

  import * as Table from '$lib/components/ui/table';
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

      <!-- not sure if we want this class yet, this is a lot of work -->
      <!-- for us. might introduce it in later seasons. thus commenting out -->
      <!-- and not complete delete -->
      <!-- <div class="row"> -->
      <!--   <div class="column-left"> -->
      <!--     <span class="martian-mono-medium playable-character">Zombies</span> -->
      <!--     - whips out a split keyboard on hackathons to assert intellectual dominance -->
      <!--     <br /> -->
      <!--     - uses arch btw -->
      <!--     <br /> -->
      <!--     - uses nvim btw -->
      <!--     <br /> -->
      <!--     - c02 monitor snug on the desk -->
      <!--   </div> -->
      <!--   <div class="column"> -->
      <!--     <img class="w-48" src={Zombies} alt="zombie coin" /> -->
      <!--   </div> -->
      <!-- </div> -->

      <div class="row">
        <div class="column-left">
          <span class="martian-mono-medium playable-character">Chads</span>
          - create memecoins on coin.fun
          <br />
          - trade on coin.fun
          <br />
        </div>
        <div class="column">
          <img class="w-48" src={Chads} alt="sunglasses coin" />
        </div>
      </div>

      You naturally fall into one or more of these groups, depending on your
      actions. Read on to learn more.
    </div>
  </section>

  <!-- <p> -->
  <!--   Think of coin.fun as GTA V. You can play more than one character at the same -->
  <!--   time. You can be zombying and chading at the same time, for example. -->
  <!-- </p> -->

  <section id="points-breakdown">
    <a href="#points-breakdown" class="heading-link">
      <h1 class="martian-mono-extrabold glow" style="font-size: 1.5em;">
        <span class="anchor-link"> # </span>
        <span style="text-decoration: line-through;">Token</span> Points Breakdown
      </h1>
    </a>

    <p>
      80% of all the points will go to players. The rest will go to coin.fun
      team.
    </p>
    <div style="display: flex; justify-content: center; margin: 2em;">
      <video autoplay controls width="500">
        <!-- <source src="/media/cc0-videos/flower.webm" type="video/webm" /> -->
        <source src={PieChart} type="video/mp4" />
      </video>
    </div>
    <p>
      There will be a total of 5 seasons. Points breakdown for each season is as
      follows.
    </p>

    <br />

    <div class="w-[400px]" style="margin: 0 auto;">
      <Table.Root>
        <Table.Caption
          >Total Percentage Points Allocation Each Season</Table.Caption
        >
        <Table.Header>
          <Table.Row>
            <Table.Head class="w-[100px]">Season Number</Table.Head>
            <Table.Head>Points Allocation</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>30%</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>2</Table.Cell>
            <Table.Cell>20%</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>3</Table.Cell>
            <Table.Cell>20%</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>4</Table.Cell>
            <Table.Cell>20%</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>5</Table.Cell>
            <Table.Cell>10%</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>
    </div>

    <br />

    <p>
      Seasons will be of varying lengths. There will be mid-season windows
      during which no points can be earned. This time will also be used to
      analyse the season and slash points if someone was playing unfairly.
      Slashed players might get banned from further games. The slashed points
      will be equally distributed amongst all other players.
    </p>
  </section>

  TODO: - charity (link vitalik and hayden) - kong & rookie holders - renft cat
  holders

  <section id="season-one-debrief">
    <a href="#season-one-debrief" class="heading-link">
      <h1 class="martian-mono-extrabold glow">
        <span class="anchor-link">#</span>
        season 1 mission debrief
      </h1>
    </a>

    <p>
      During Season 1 there will be questing system in place. On top of earning
      points, hefties, normies and chads are entitled to 100% of the fee revenue
      made from bonding curve trading.
    </p>

    <br />
    <br />

    <p>
      Those that register with coin.fun prior to Season 1 are eligible for
      trading fee share during Season 1. If you join during Season 1 you will
      not share in the trading fees, but you are still able to earn points. To
      join, you need to go to "My Account". Here you can either connect your
      existing wallet, or simply use socials to register. This will
      automatically create a wallet for you. This is how to register for Chads
      rewards. For Hefties and Normies, you must perform an extra step of
      connecting your Twitter account with coin.fun.
    </p>

    <br />
    <p>
      Season 1 revolves around the battle between the players. The starting
      split between the 4 player groups is 35% hefties, 25% normies and 40%
      chads. These are the percentages for fee share. The final split depends on
      how many points each player group earns towards the end of the season 1.
      If hefties aren't earning any points, then the other groups will make
      their fees.

      <br />
      Do not forget that each app user may be in more than one player group. Main
      objectives of each group for season 1 will be:

      <br />
      <br />

      1/ Hefties - register with coin.fun app, authorize their twitter account
      and DM us that they wish to participate. The more engaging your tweets
      about coin.fun the higher share of points you will be assigned. This then
      increases the chances that all hefties stay at 40% of all trading fees for
      that month. Moreover, you will be competing with other hefties for a share
      of those 40%. In this way, you are competing together with your fellow
      hefties versus chads and normies, whilst also at the same time you compete
      against individual hefties within your player category.

      <br />
      <br />

      2/ Normies - there will be an allocation of points that accumulates at a
      constant rate until end of Season 1. All you have to do is to simply
      connect your twiter account in the "My Account". The earlier you do this
      the more points you will collect.

      <br />
      <br />

      3/ Chads - keep trading the coins. Make new coins.
    </p>
  </section>

  <br />

  This doc might get updated from time to time. We will keep reference of all
  past versions. You are reading v1.0 of the doc.
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
