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
</nav>

<slot />
