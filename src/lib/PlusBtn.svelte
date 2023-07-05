<script>
  export let onClick;
  export let bg = "bg-primary";
  export let hover = "bg-primary-focus";
</script>
<button
  on:click={onClick}
  class= {`rounded-full w-14 h-14 self-end mr-3 fixed bottom-3 text-5xl text-base-100 hover:text-white ${bg} hover:${hover}`}
>
  +
</button>
