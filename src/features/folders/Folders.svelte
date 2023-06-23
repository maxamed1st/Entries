<script>
  import Navbar from "../../components/Navbar.svelte";
  import CreateFolder from "./lib/CreateFolder.svelte";
  import { userCol, loading, currentFolder } from "../../lib/store";
  import { navigate } from "svelte-routing";
  import { afterUpdate } from "svelte";

  let showModal = false;
  let folders;

  afterUpdate(async () => {
    //make sure data is loaded correctly
    if ($loading) await loading.isLoading();
    //extract folder data if such exists
    const folderDocs = $userCol?.find((doc) => doc.id == "folders");
    folders = folderDocs ? Object.values(folderDocs) : null;
  });

  function viewNotes(e) {
    // const notes = $userCol.find(doc => doc.folder == e.target.id);
    const folder = e.target.id;
    currentFolder.set(folder);
    navigate("/notes");
  }
</script>

<Navbar />
<main class="flex flex-col gap-2 items-center">
  {#if $loading}
    <div class="grid place-content-center h-[100vh]">
      <span class="loading w-52" />
    </div>
  {:else}
    <CreateFolder bind:showModal />
    {#if Array.isArray(folders)}
      {#each folders as folder}
        {#if folder !== "folders"}
          <button
            on:click|preventDefault={viewNotes}
            id={folder}
            class="border w-52 h-10 bg-slate-500 hover:bg-slate-400 text-white text-xl"
            >{folder}</button
          >
        {/if}
      {/each}
    {/if}
  {/if}
  <button
    on:click={(e) => (showModal = true)}
    class="rounded-[110%] text-2xl p-2 bg-slate-500 hover:bg-slate-400"
  >
    +
  </button>
</main>
