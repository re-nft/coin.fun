<script lang="ts">
  import '../app.css';

  // do not remove this import. we use it for vercel analytics
  import { inject } from '@vercel/analytics';
  import { setContext } from 'svelte';

  import EmojiBackdrop from '$lib/components/EmojiBackdrop.svelte';
  import Navigation from '$lib/components/Navigation.svelte';
  import { createStore as createSolanaStore } from '$lib/solana';
  import { createStore as createUserStore } from '$lib/user';

  export let data;

  let user = createUserStore();

  setContext('solana', createSolanaStore(data.solana));
  setContext('user', user);

  inject();
</script>

<Navigation />

<main class="container">
  <slot />
</main>

<EmojiBackdrop />
