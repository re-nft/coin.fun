<script lang="ts">
  import Hefties from '$lib/assets/Hefties.svg';
  import Normies from '$lib/assets/Normies.svg';
  import Zombies from '$lib/assets/Zombies.svg';
  import Chads from '$lib/assets/Chads.svg';

  import * as Table from '$lib/components/ui/table';
</script>

<div style="padding-top: 2em;">
  <p>
    There will be a total of <span class="martian-mono-medium"
      >420,690,000,000</span
    > tokens (cough cough points)
  </p>

  <br />

  <p>
    There are four groups of peeps who are very <b class="super-bold"
      >important</b
    > to us, who we shall uplift through this one of a kind kombucha, chakra unlocking,
    third eye awakening, degenerate trading experience
  </p>

  <br />

  <h1 class="martian-mono-extrabold">playable characters</h1>

  <div style="margin: 0 3em;">
    <div class="row">
      <div class="column-left">
        <span class="martian-mono-medium">Hefties</span>
        <br />
        20k+ twitter followers
        <br />
        learned the dark arts of X algorithm
        <br />
        buying APs, driving Lambos, bonking, floking
        <br />
        life is a movie
      </div>
      <div class="column">
        <img class="w-48" src={Hefties} alt="fat coin" />
      </div>
    </div>

    <div class="row">
      <div class="column">
        <div><img class="w-48" src={Normies} alt="normal coin" /></div>
      </div>
      <div class="column-left">
        <span class="martian-mono-medium">Normies</span>
        <br />
        we are just normal bruh
        <br />
        nothing else to say
        <br />
        takes a loan on the house and gets a SOL bag
        <br />
        bets on hamster races
      </div>
    </div>

    <div class="row">
      <div class="column-left">
        <span class="martian-mono-medium">Zombies</span>
        <br />
        bots will find a way into the system
        <br />
        props for trying
        <br />
        we embrace you, and you will get your slice of the pie
        <br />
        good bots, of course (wink wink)
      </div>
      <div class="column">
        <img class="w-48" src={Zombies} alt="zombie coin" />
      </div>
    </div>

    <div class="row">
      <div class="column">
        <img class="w-48" src={Chads} alt="sunglasses coin" />
      </div>
      <div class="column-left">
        <span class="martian-mono-medium">Chads</span>
        <br />
        coining and printing memes on coin.fun app
        <br />
        coin.fun's lifeblood
        <br />
      </div>
    </div>
  </div>

  <br />
  <p>
    Think of coin.fun as GTA V. You can play more than one character at the same
    time. You can be zombying and chading at the same time, for example.
  </p>

  <br />

  <p>80% of all points will go to players</p>
  <p>the rest will go to coin.fun dev team</p>

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
    Seasons will be of varying lengths. Season 1 will last for 4 weeks and
    starts at v2 launch
  </p>

  <h1 class="martian-mono-extrabold">season 1 rundown</h1>

  <p>
    During Season 1 there will be questing system in place. On top of earning
    points, hefties, normies, chads and zombies are entitled to 100% of the fee
    revenue made from bonding curve trading.
  </p>

  <br />

  <br />

  <p>
    People on the waitlist will be given exclusive access to coin.fun in the
    first two weeks of launch. All fees accrued will be shared between these
    accounts only
  </p>
  <br />

  <p>
    The earlier you claim and register on coin.fun, the higher multiplier on the
    fees earned.
  </p>

  <br />
  <br />
</div>

<style>
  p {
    max-width: 64em;
    padding-left: 2em;
    padding-right: 2em;
    margin: 0 auto;
  }

  .row {
    max-width: 64em;
    padding-left: 2em;
    padding-right: 2em;
    margin: 0 auto;
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
    margin: 2em;
    text-align: center;
  }

  .super-bold {
    font-weight: 600;
  }
</style>
