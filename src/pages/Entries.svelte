<script>
  import Navbar from "../components/Navbar.svelte";
  import Sidebar from "../features/notes/Sidebar.svelte";
  import PlusBtn from "../lib/PlusBtn.svelte";
  import { userCol, currentFolder, loading, currentPath } from "../lib/store";
  import { afterUpdate } from "svelte";

  let render;

  afterUpdate(async () => {
    //make sure data is loaded correctly
    if ($loading) await loading.isLoading();
    currentPath.set([$currentFolder, "entries"]);
  });

  function readDoc(e) {
    //View the note
    render = e.currentTarget.id;
  }

  function createDoc(e) {
    render = "create";
  }
</script>

<Navbar />
<main class="flex">
  <section class="w-1/3 flex flex-col gap-2 bg-base-100 h-full min-h-screen">
    {#each $userCol as doc}
      {#if doc.id !== "folders" && doc.folder == $currentFolder}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div
          on:click={readDoc}
          id={doc.id}
          class="card card-compact rounded-lg mx-2 h-24 text-primary-content bg-primary hover:bg-primary-focus cursor-pointer break-all"
        >
          <div class="card-body gap-0 overflow-hidden">
            <h2 class="card-title">{doc.title}</h2>
            <p1>{doc.content}</p1>
          </div>
        </div>
      {/if}
    {/each}
    <PlusBtn onClick={createDoc} />
  </section>
  {#key render}
    <Sidebar {render} />
  {/key}
</main>
