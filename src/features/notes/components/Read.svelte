<script>
  import { onMount } from "svelte";
  import { userCol } from "../../../lib/store";
  export let id;
  let title;
  let content;
  onMount(() => {
    const note = $userCol.find(doc => doc.id == id)
    title = note.title;
    content = note.content;
  })
</script>
<article class="flex flex-col gap-2 items-center p-5 m-5">
  <header>{title}</header>
  <main>{content}</main>
</article>
