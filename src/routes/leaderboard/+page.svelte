<script lang="ts">
  import PageMeta from '$lib/components/PageMeta.svelte';
  import * as Table from '$lib/components/ui/table';

  export let data;
  $: ({ rankings } = data);
</script>

<PageMeta
  title="Leaderboard - Top degens and rekt regards on Coin.fun"
  description="Check out the apex degens! Who’s mooning and who’s crying? Wen Lambo? Wen REKT? Get on the board or stay poored!"
  keywords="top degens, high rollers, bag holders, mooning, crying, Lambo, REKT, leaderboard, stay poor, $COIN"
/>

<h1
  class="text-glow-green mx-auto my-20 max-w-screen-md text-center font-mono text-3xl font-extrabold uppercase text-primary"
>
  Leaderboard
</h1>

<Table.Root class="caption-top">
  <Table.Header>
    <Table.Row>
      <Table.Head>#</Table.Head>
      <Table.Head>Username</Table.Head>
      <Table.Head class="text-right">Points</Table.Head>
    </Table.Row>
  </Table.Header>
  <Table.Body>
    {#each rankings as user, index (user.userId)}
      <Table.Row
        class="row sm:[&:nth-child(1)]:text-2xl sm:[&:nth-child(2)]:text-xl sm:[&:nth-child(3)]:text-lg"
      >
        <Table.Cell>{index + 1}</Table.Cell>
        <Table.Cell
          class="overflow-hidden text-ellipsis whitespace-nowrap font-medium"
        >
          <a
            href={`https://x.com/${user.userName}`}
            rel="noopener nofollow noreferrer"
            target="_blank"
          >
            <img
              alt={user.userName?.slice(0, 2)}
              class="avatar inline-block size-10 rounded-full bg-slate-700 p-1 text-center align-middle uppercase leading-[2.5]"
              src={user.avatar}
            />
            {user.userName}</a
          >
        </Table.Cell>
        <Table.Cell class="text-right">{user.total}</Table.Cell>
      </Table.Row>
    {/each}
  </Table.Body>
</Table.Root>

<style lang="postcss">
  :global(.row:nth-child(1)) .avatar {
    background-image: linear-gradient(
      -45deg,
      #efce64,
      #cd9f34,
      #f8dc79,
      #c5992d
    );
  }
  :global(.row:nth-child(2)) .avatar {
    background-image: linear-gradient(
      -45deg,
      #736f70,
      #afadae,
      #f5f5f5,
      #706d6f
    );
  }
  :global(.row:nth-child(3)) .avatar {
    background-image: linear-gradient(
      -45deg,
      #7b3b1b,
      #e4774f,
      #ffc099,
      #a95731
    );
  }
</style>
