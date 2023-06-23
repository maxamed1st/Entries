<script>
  import { onMount } from "svelte";
  import { userCol, loading } from "../../../lib/store";

  export let id;
  let title;
  let content;

  onMount(async () => {
    //make sure data is loaded correctly
    if ($loading) await loading.isLoading();
    const note = $userCol.find((doc) => doc.id == id);
    title = note.title;
    content = note.content;
  });
</script>

{#if $loading}
  <div class="grid place-content-center h-[100vh]">
    <span class="loading w-52" />
  </div>
{:else}
  <article class="flex flex-col gap-2 items-center p-5 m-5">
    <header>{title}</header>
    <main>{content}</main>
  </article>
{/if}
