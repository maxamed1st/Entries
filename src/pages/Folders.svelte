<script>
  import Navbar from "../components/Navbar.svelte";
  import CreateFolder from "../features/folders/CreateFolder.svelte";
  import { userCol, loading, currentFolder, currentPath } from "../lib/store";
  import PlusBtn from "../lib/PlusBtn.svelte";
  import { navigate } from "svelte-routing";
  import { afterUpdate } from "svelte";

  let showModal = false;
  let folders;

  afterUpdate(async () => {
    //make sure data is loaded correctly
    if ($loading) await loading.isLoading();
    //update currentPath
    currentPath.set(["Folders"]);
    //extract folder data if such exists
    const folderDocs = { ...$userCol?.find((doc) => doc.id == "folders") };
    //remove id and current, fields
    if (folderDocs) {
      delete folderDocs.id;
      delete folderDocs.current;
    }
    folders = folderDocs ? Object.values(folderDocs) : null;
  });

  function viewNotes(e) {
    //view the folder
    const folder = e.currentTarget.id;
    currentFolder.set(folder);
    navigate("/entries");
  }
</script>

<Navbar />
<main class="flex flex-col gap-2">
  <CreateFolder bind:showModal />
  {#if Array.isArray(folders)}
    {#each folders as folder}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div
        on:click={viewNotes}
        id={folder}
        class="card card-compact rounded-lg mx-2 text-primary-content bg-primary hover:bg-primary-focus cursor-pointer"
      >
        <div class="card-body">
          <h2 class="card-title font-montserrat">{folder}</h2>
        </div>
      </div>
    {/each}
  {/if}
  <PlusBtn onClick={() => (showModal = true)} />
</main>
