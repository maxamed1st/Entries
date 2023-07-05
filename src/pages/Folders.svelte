<script>
  import Navbar from "../components/Navbar.svelte";
  import CreateFolder from "../features/folders/CreateFolder.svelte";
  import { userCol, loading, currentFolder } from "../lib/store";
  import PlusBtn from "../lib/PlusBtn.svelte";
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
    //view the folder
    const folder = e.currentTarget.id;
    currentFolder.set(folder);
    navigate("/notes");
  }
</script>

<Navbar />
<main class="flex flex-col gap-2">
  <CreateFolder bind:showModal />
  {#if Array.isArray(folders)}
    {#each folders as folder}
      {#if folder !== "folders"}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div
          on:click={viewNotes}
          id={folder}
          class="card card-compact rounded-lg mx-2 text-secondary-content bg-secondary hover:bg-secondary-focus cursor-pointer"
        >
          <div class="card-body">
            <h2 class="card-title">{folder}</h2>
          </div>
        </div>
      {/if}
    {/each}
  {/if}
  <PlusBtn />
</main>
