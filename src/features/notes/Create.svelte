<script>
  import { userCol } from "../../lib/store";
  import { currentFolder, currentPath } from "../../lib/store";
  import PlusBtn from "../../lib/PlusBtn.svelte";

  let content = "";
  let title = "";

  $: {
    //update currentPath
    currentPath.set([$currentFolder, "entries", title]);
  }

  function create() {
    //create new document in the database
    userCol.createData(title, content, $currentFolder);
    //reset the input values to empty string
    title = "";
    content = "";
  }
</script>

<main class="flex flex-col h-full min-h-screen">
  <input
    type="text"
    bind:value={title}
    class="w-full h-10 bg-inherit focus:outline-none"
  />
  <hr class="text-current" />
  <textarea
    bind:value={content}
    class="relative resize-none min-h-screen h-full w-full bg-inherit focus:outline-none"
  />
  <PlusBtn onClick={create} bg="bg-secondary" hover="bg-secondary-focus" />
</main>
