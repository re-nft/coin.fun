<script lang="ts">
  import { page } from '$app/stores';

  const TITLE = 'coin.fun';
  const DESCRIPTION = 'Community Owned Memecoin Printer';

  export let title = TITLE;
  export let description = DESCRIPTION;
  export let keywords = '';

  $: image = `${$page.url.host}/api/image?title=${encodeURIComponent(title)}`;
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />

  <meta property="og:description" content={description} />
  <meta property="og:title" content={title} />
  <meta property="og:site_name" content={TITLE} />
  <meta property="og:url" content={$page.url.href} />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:url" content={$page.url.href} />

  {#if keywords}
    <meta name="keywords" content={keywords} />
  {/if}

  <meta property="og:image" content={image} />
  <meta name="twitter:image" content={image} />
</svelte:head>
