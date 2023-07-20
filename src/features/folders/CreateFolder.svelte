<script>
  import { currentFolder, userCol } from "../../lib/store";
  import { navigate } from "svelte-routing";

  export let showModal;
  let modal;
  let title;

  function createFolder() {
    //make sure form is not empty
    title = title.trim();
    if (!title.length) return (showModal = false);
    //Set currentFolder for redirection
    currentFolder.set(title);
    //add to db
    userCol.createFolder($currentFolder);
    //reset form and close modal
    title = "";
    showModal = false;
    //redirect to the new folder
    navigate("/entries");
  }
</script>

<dialog bind:this={modal} open={showModal} class="modal">
  <form
    method="dialog"
    on:submit|preventDefault={createFolder}
    class="modal-box"
  >
    <button
      type="button"
      on:click={() => (showModal = false)}
      class="btn btn-sm btn-circle btn-ghost absolute top-2 right-2">✕</button
    >
    <label for="title" class="label"> New Folder </label>
    <input
      type="title"
      id="title"
      bind:value={title}
      placeholder="name"
      class="input bg-neutral text-neutral-content w-full"
      required
    />
    <button type="submit" class="btn btn-primary flex mt-6 ml-auto"
      >create</button
    >
  </form>
</dialog>
