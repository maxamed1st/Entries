<script>
  import { userCol, currentFolder } from "../../lib/store";
  import { auth } from "../../lib/firebase";
  import { signOut } from "firebase/auth";
  import { navigate } from "svelte-routing"
  function readDoc(e) {
    navigate(`/notes/read/${e.target.id}`);
  }
  function createDoc(e) {
    navigate("/notes/create");
  }
</script>
<main class="flex flex-col gap-2 items-center p-5">
  <button on:click={e => signOut(auth)} class=" bg-slate-500 hover:bg-slate-400 p-2 rounded"> log out </button>
{#each $userCol as doc}
  {#if doc.id !== "folders" && doc.folder == $currentFolder}
    <button on:click|preventDefault={readDoc} id={doc.id} class="border w-52 h-10 bg-slate-500 hover:bg-slate-400 text-white text-xl">{doc.title}</button>
  {/if}
{/each}
<button on:click={createDoc} class="rounded-[110%] text-2xl p-2 bg-slate-500 hover:bg-slate-400"> + </button>
</main>
