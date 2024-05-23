<script lang="ts">
  import { onMount } from 'svelte';

  onMount(() => {
    // remove the `#` at the start
    const hash = window.location.hash.substring(1);
    const params = new URLSearchParams(hash);
    const queryString = params.toString();

    // redirect to the server-side endpoint with the parameters
    window.location.href = `/myprofile/twitter/callback?${queryString}`;
  });
</script>
