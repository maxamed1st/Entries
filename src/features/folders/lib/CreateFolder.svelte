<script>
  import { currentFolder, userCol } from "../../../lib/store";
  export let showModal;
  let dialog;
  let title;
  $: if(dialog && showModal) dialog.showModal();
  function createFolder() {
    currentFolder.set(title);
    userCol.createFolder($currentFolder);
    showModal = false;
    dialog.close();
  }
</script>
{#if showModal}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <dialog 
  bind:this = {dialog} 
  on:close = {() => showModal = false}
  on:click|self = {dialog.close()}
  class="flex flex-col gap-1"
  >
    <form on:submit|preventDefault={createFolder}>
      <input type=title bind:value={title} required 
      class="border" />
      <button type="submit"> create </button>
    </form>
  </dialog>
{/if}