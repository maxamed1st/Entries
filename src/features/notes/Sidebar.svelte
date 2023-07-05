<script>
  import Create from "./Create.svelte"
  import Read from "./Read.svelte"
  import { loading } from "../../lib/store";
  import { afterUpdate } from "svelte";

  export let render;

  afterUpdate(async () => {
    //make sure data is loaded correctly
    if ($loading) await loading.isLoading();
  });

</script>

<section class="w-2/3 bg-base-300 h-full min-h-screen">
  {#if render == 'create'}
    <Create />
  {:else}
    <Read id={render}/>
  {/if}
</section>
