<script>
  import { onMount } from "svelte";
  import { userCol, loading, currentFolder, currentPath } from "../../lib/store";

  export let id;
  let title;
  let content;

  onMount(async () => {
    //make sure data is loaded correctly
    if ($loading) await loading.isLoading();
    const note = $userCol.find((doc) => doc.id == id);
    title = note?.title;
    content = note?.content;
  });

  $: {
    //update currentPath
    currentPath.set([$currentFolder, "entries", title]);
  }
</script>

<article class="flex flex-col gap-2 text-current p-5">
  <header>{title ? title : ''}</header>
  <main class="break-words">{content ? content : ''}</main>
</article>
