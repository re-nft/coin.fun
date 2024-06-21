<script lang="ts">
  import { page } from '$app/stores';

  $: coinId = $page.params.coinId;
</script>

<h1>Coin Details for {coinId}</h1>