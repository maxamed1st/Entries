<script>
  import { loading } from "./store";
</script>

{#if $loading}
  <div class="grid place-content-center h-[100vh]">
    <span class="loading w-52" />
  </div>
{/if}
