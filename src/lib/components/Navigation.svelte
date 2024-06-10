<script lang="ts">
  const pages = {
    'home': '/',
    'earn $COIN': '/tokenomics',
    'quests': '/quests',
    'leaderboard': '/leaderboard'
  };
</script>

<nav
  class="flex items-center justify-center bg-[--color-orange] underline decoration-dotted"
>
  {#each Object.entries(pages) as [label, href]}
    <a {href}>{label}</a>
  {/each}
</nav>

<style lang="postcss">
  a {
    @apply px-5 py-2.5 text-black transition;

    &:hover {
      background-color: #02ad64;
    }
  }
</style>
