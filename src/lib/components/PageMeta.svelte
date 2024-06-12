<script lang="ts">
  import { page } from '$app/stores';

  const TITLE = 'coin.fun';
  const DESCRIPTION = 'Community Owned Memecoin Printer';
  const KEYWORDS =
    'memecoin printer, community owned crypto, degenerate crypto, flip tokens, $COIN, crypto fun, crypto DJN';

  export let title = TITLE;
  export let description = DESCRIPTION;
  export let keywords = KEYWORDS;

  $: image = `${$page.url.origin}/api/image?title=${encodeURIComponent(title)}`;
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta name="keywords" content={keywords} />

  <meta property="og:description" content={description} />
  <meta property="og:title" content={title} />
  <meta property="og:site_name" content={TITLE} />
  <meta property="og:url" content={$page.url.href} />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:url" content={$page.url.href} />

  <meta property="og:image" content={image} />
  <meta name="twitter:image" content={image} />
</svelte:head>
