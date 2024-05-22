<script lang="ts">
  import '../app.css';

  import { setContext } from 'svelte';

  import { createStore as createSolanaStore } from '$lib/solana';
  import { createStore as createUserStore } from '$lib/user';

  export let data;

  setContext('solana', createSolanaStore(data.solana));
  setContext('user', createUserStore());
</script>

<nav>
  <a href="/">home</a>
  <a href="/leaderboard">leaderboard</a>
  <a href="/pointonomics">pointonomics</a>
  <a href="/myprofile">my profile</a>
</nav>

<slot />

<!-- shadcn/ui for svelte does not have the nav component -->
<style>
  nav {
    background-color: #000;
    padding: 10px;
    display: flex;
    justify-content: space-around;
  }

  nav a {
    color: white;
    text-decoration: none;
    padding: 10px 20px;
    font-size: 16px;
    transition: background-color 0.3s ease;
  }

  nav a:hover {
    background-color: #555;
  }
</style>
