<script>
    import { navigate } from "svelte-routing";
  import { userCol } from "../../../lib/store";
  let content;
  let title;
  function create() {
    //create new document in the database
    userCol.createData(title, content);
    //reset the input values to empty string
    title = "";
    content = "";
    navigate("/notes");
  }
</script>
<main class="flex flex-col items-center m-5 p-5">
  <input type="text" bind:value={title} class="border w-[90vw] border-black" />
  <textarea bind:value={content} class="border rounded border-black resize-none h-[80vh] w-[90vw]"/>
  <button on:click={create} class="rounded bg-blue-600 w-24 h-8 text-white hover:bg-blue-500"> save </button>
</main>
