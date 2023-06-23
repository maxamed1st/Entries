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
    navigate(`/notes/read/${e.target.id}`);
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
  <main class="flex flex-col gap-2 items-center p-5">
    {#each $userCol as doc}
      {#if doc.id !== "folders" && doc.folder == $currentFolder}
        <button
          on:click|preventDefault={readDoc}
          id={doc.id}
          class="border w-52 h-10 bg-slate-500 hover:bg-slate-400 text-white text-xl"
          >{doc.title}</button
        >
      {/if}
    {/each}
    <button
      on:click={createDoc}
      class="rounded-[110%] text-2xl p-2 bg-slate-500 hover:bg-slate-400"
    >
      +
    </button>
  </main>
{/if}
