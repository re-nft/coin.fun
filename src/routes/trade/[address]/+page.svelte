<script lang="ts">
  export let data;
  $: address = data.address;
</script>

Coin: {address}
