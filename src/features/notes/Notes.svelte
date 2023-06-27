<script>
  import Navbar from "../../components/Navbar.svelte";
  import { userCol, currentFolder, loading } from "../../lib/store";
  import { navigate } from "svelte-routing";
  import { afterUpdate } from "svelte";

  afterUpdate(async () => {
    //make sure data is loaded correctly
    if ($loading) await loading.isLoading();
  });

  function readDoc(e) {
    //View the note
    navigate(`/notes/read/${e.currentTarget.id}`);
  }

  function createDoc(e) {
    navigate("/notes/create");
  }
</script>

{#if $loading}
  <div class="grid place-content-center h-[100vh]">
    <span class="loading w-52" />
  </div>
{:else}
  <Navbar />
  <main class="flex flex-col gap-2">
    {#each $userCol as doc}
      {#if doc.id !== "folders" && doc.folder == $currentFolder}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div on:click={readDoc} id={doc.id}
         class="card card-compact rounded-lg mx-2 h-24 text-secondary-content bg-secondary hover:bg-secondary-focus cursor-pointer break-all">
          <div class="card-body gap-0 overflow-hidden">
            <h2 class="card-title"> {doc.title} </h2>
            <p1>{doc.content}</p1>
          </div>
        </div>
      {/if}
    {/each}
    <button
      on:click={createDoc}
      class="rounded-full w-14 h-14 self-end mr-3 fixed bottom-3 text-5xl text-base-100 hover:text-white bg-primary hover:bg-primary-focus"
    >
      +
    </button>
  </main>
{/if}
