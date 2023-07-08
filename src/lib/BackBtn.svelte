<script>
  import { afterUpdate } from "svelte";

  let path;
  afterUpdate(() => {
  path = location.pathname;
  })

  function onClick() {
    if(path == "/folders") {
      location.href = "/";
    } else history.back();
  }
</script>
<button on:click={onClick} class="h-full text-center self-center group">
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
    <path d="M16.5 11H7.5L12 6.5L11.3 5.8L4.8 12.3L11.3 18.8L12 18.1L7.5 13H16.5V11Z" class="fill-current group-hover:fill-accent" />
  </svg>
</button>
