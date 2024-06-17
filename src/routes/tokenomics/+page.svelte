<script lang="ts">
  import PieChart from '$lib/assets/coin-fun-pie-chart.mp4';
  import Hefties from '$lib/assets/Hefties.svg';
  import Normies from '$lib/assets/Normies.svg';
  import PageMeta from '$lib/components/PageMeta.svelte';
  import * as Table from '$lib/components/ui/table';
</script>

<PageMeta
  title="Tokenomics - Ape to earn"
  description="Our tokenomics. Stack $COIN like a boss. Flip tokens, print memecoins, and ride the degen rollercoaster to the moon. WAGMI or get rekt!"
  keywords="tokenomics, earn $COIN, degen profits, flip tokens, print memecoins, crypto riches, community owned crypto"
/>

<h1
  class="text-glow-green mx-auto my-20 max-w-screen-md text-center font-mono text-3xl font-extrabold uppercase text-primary"
>
  Earn $COIN
</h1>

<div class="tokenomics">
  <p>
    There will be a total of <span
      class="text-glow-green font-mono"
      style="font-size: 1.5em;">420,690,000,000</span
    > $COIN tokens, which shall be distributed via points system. Points do not map
    1:1 to tokens.
  </p>

  <br />

  <p>
    There are two playable characters in first season who we shall uplift
    through this one of a <strong style="font-weight: 800;"
      >kind kombucha chakra unlocking third eye awakening degenerate trading
      experience</strong
    >
  </p>

  <br />

  <section id="playable-characters">
    <a href="#playable-characters" class="heading-link">
      <h1 class="text-glow-green font-mono font-bold" style="font-size: 1.5em;">
        <span class="anchor-link"> # </span>
        playable characters
      </h1>
    </a>

    <div>
      <div class="row">
        <div class="column-left">
          <span class="playable-character font-mono">Hefties</span>
          - 5k+ twitter followers
          <br />
          - retweet / quote tweet coin.fun memes or content about coin.fun
        </div>
        <div class="column">
          <img class="w-48" src={Hefties} alt="fat coin" />
        </div>
      </div>

      <div class="row">
        <div class="column-left">
          <span class="martian-mono-medium playable-character">Normies</span>
          - make coin.fun memes / content
          <br />
        </div>
        <div class="column">
          <div><img class="w-48" src={Normies} alt="normal coin" /></div>
        </div>
      </div>
    </div>
  </section>

  <section id="points-distribution">
    <a href="#points-distribution" class="heading-link">
      <h1
        class="text-glow-green font-mono font-extrabold"
        style="font-size: 1.5em;"
      >
        <span class="anchor-link"> # </span>
        <span style="text-decoration: line-through;">Token</span> Points Distribution
      </h1>
    </a>

    <p>
      80% of all the points will go to players. The rest will go to coin.fun
      team.
    </p>
    <div style="display: flex; justify-content: center; margin: 2em;">
      <video autoplay muted={import.meta.env.DEV} controls width="1000">
        <track kind="captions" />
        <source src={PieChart} type="video/mp4" />
      </video>
    </div>
  </section>

  <h1 class="text-glow font-mono font-extrabold">Checkpoint 1</h1>

  <section id="how-to-earn-points">
    <a href="#how-to-earn-points" class="heading-link">
      <h1 class="text-glow-green font-mono font-extrabold">
        <span class="anchor-link">#</span>
        how to earn points
      </h1>
    </a>

    <p>
      Anyone is able to earn points through quests. Outside of quests, normies
      will create memes / content (see <a
        href="https://zer0-to-one.notion.site/Coin-fun-Creator-Handbook-ee08377a9ec24fd19a2b3b0be29c33ac?pvs=4"
        target="_blank"
        style="text-decoration: underline;">here</a
      > for guidelines) and hefties pick which ones they like and retweet / quote
      tweet. A meme / content piece must tag @coindotfun. Tagging a heftie in a meme
      disqualifies it.
    </p>

    <br />
    <p>
      This is how each playable character can earn points:

      <br />
      <br />

      1/ Hefties - sign up with twitter on coin.fun app. Quote tweet / retweet
      content / memes where @coindotfun is tagged. You get one of:
      <br />
      <br />
      200k points if it's a quote tweet
      <br />
      OR
      <br />
      100k points if it's a retweet.
      <br />
      <br />
      You can retweet / quote tweet as many tweets as you want. We will pick your
      top tweet only by analysing its engagement: replies, retweets and quote tweets.
      That means you can only earn 100k or 200k points per day. If you have retweeted
      and quote tweeted, we will always pick your best quote tweet that day. Read
      <a href="#caution">caution</a>
      section to learn about how your points will be scaled at checkpoint 1 (this
      is how we call end of season 1).

      <br />
      <br />

      2/ Normies - connect your twiter account in the
      <a href="/quests" style="text-decoration: underline;">quests tab</a>, make
      memes / content about coin.fun and post on twitter (make sure you tag us
      @coindotfun). See
      <a
        href="https://zer0-to-one.notion.site/Coin-fun-Creator-Handbook-ee08377a9ec24fd19a2b3b0be29c33ac?pvs=4"
        target="_blank"
        style="text-decoration: underline;">here</a
      >
      for guidelines. You have a daily cap of 150k points flat per meme / piece of
      content. You are free to post as many tweets as you like, but we will pick
      your top tweet only. Read
      <a href="#caution" style="text-decoration: underline;">caution</a> section
      to learn about how your points will be scaled at checkpoint 1.
    </p>
  </section>

  <section id="token-distribution-example">
    <a href="#token-distribution-example" class="heading-link">
      <h1 class="text-glow-green font-mono font-extrabold">
        <span class="anchor-link">#</span>
        token distribution example
      </h1>
    </a>

    <p>
      Let's contrive a hypothetical example where only 4 players took part in
      token farming during season 1. Let's also assume that their points at
      checkpoint 1 (end of season 1) are: 4m points, 2m points, 1m points and 1m
      points. Let's also assume that 10% of total token supply (42bn tokens) is
      airdropped end of season 1.
    </p>
    <p>Then their token allocation will look like so:</p>
    <Table.Root class="caption-top">
      <Table.Header>
        <Table.Row>
          <Table.Head>Player #</Table.Head>
          <Table.Head>Points</Table.Head>
          <Table.Head>% out of total points</Table.Head>
          <Table.Head>Tokens Earned</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row class="row">
          <Table.Cell>1</Table.Cell>
          <Table.Cell>4m</Table.Cell>
          <Table.Cell>50%</Table.Cell>
          <Table.Cell>21bn</Table.Cell>
        </Table.Row>
        <Table.Row class="row">
          <Table.Cell>2</Table.Cell>
          <Table.Cell>2m</Table.Cell>
          <Table.Cell>25%</Table.Cell>
          <Table.Cell>10.5bn</Table.Cell>
        </Table.Row>
        <Table.Row class="row">
          <Table.Cell>3</Table.Cell>
          <Table.Cell>1m</Table.Cell>
          <Table.Cell>12.5%</Table.Cell>
          <Table.Cell>5.25bn</Table.Cell>
        </Table.Row>
        <Table.Row class="row">
          <Table.Cell>4</Table.Cell>
          <Table.Cell>1m</Table.Cell>
          <Table.Cell>12.5%</Table.Cell>
          <Table.Cell>5.25bn</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table.Root>
    <p>TLDR; points = a % of token airdrop</p>
    <p>
      To make example simple to understand we have ommitted the coin.fun team's
      points share. 20% of all points will go to coin.fun team. In other words,
      if 8m of points were earned in total, 1.6m points would go to coin.fun.
    </p>
  </section>

  <section id="caution">
    <a href="#caution" class="heading-link">
      <h1 class="text-glow-green font-mono font-extrabold">
        <span class="anchor-link">#</span>
        caution
      </h1>
    </a>

    <p>
      All tweets will be checked for authenticity. If a tweet is authentic, all
      points made on the tweet aren't affected. However, we might apply an
      adjustment factor to a tweet that will dampen all points made on it. We
      will perform such analysis in between checkpoints.
    </p>

    <br />
    <p>
      Everyone will need to produce at least one meme / content piece on twitter
      (unless you are a heftie) to qualify for points. This is to weed out bots
      from allocation. We reserve the right to analyse the activity and remove
      bots from token drop.
    </p>

    <br />
    <strong>
      Bonus multiplier / dampening factor will get applied to each tweet's
      points at checkpoint 1. We will use a function that is the lifeblood of
      AI: <a
        href="https://en.wikipedia.org/wiki/Sigmoid_function"
        target="_blank"
        style="text-decoration: underline;">sigmoid function</a
      >. Each day, each normie / heftie will have posted their top tweet that we
      have picked. Provided tweet is not botted, we apply a sigmoid function to
      all the tweets. Average performing tweets will get a factor of 1: no
      bonus, no dampening. The very top tweets will get bonus points, the very
      worst tweets will get dampened.
    </strong>
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
