<script lang="ts">
  import '../app.css';

  // do not remove this import. we use it for vercel analytics
  import { inject } from '@vercel/analytics';
  import { onMount, setContext } from 'svelte';

  import { invalidate } from '$app/navigation';
  import EmojiBackdrop from '$lib/components/EmojiBackdrop.svelte';
  import Navigation from '$lib/components/Navigation.svelte';
  import { createStore as createSolanaStore } from '$lib/solana';
  import { createStore as createUserStore } from '$lib/user';

  export let data;
  $: ({ session, supabase } = data);

  setContext('solana', createSolanaStore(data.solana));
  setContext('user', createUserStore(data.user));

  inject();

  onMount(() => {
    const { data } = supabase.auth.onAuthStateChange((_, nextSession) => {
      if (nextSession?.expires_at !== session?.expires_at) {
        invalidate('supabase:auth');
      }
    });
    return () => data.subscription.unsubscribe();
  });
</script>

<svelte:head>
  <script>
    window.twttr = (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0],
        t = window.twttr || {};
      if (d.getElementById(id)) return t;
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://platform.twitter.com/widgets.js';
      fjs.parentNode.insertBefore(js, fjs);

      t._e = [];
      t.ready = function (f) {
        t._e.push(f);
      };

      return t;
    })(document, 'script', 'twitter-wjs');
  </script>
</svelte:head>

<Navigation />

<main class="container flow-root">
  <slot />
</main>

<EmojiBackdrop />
