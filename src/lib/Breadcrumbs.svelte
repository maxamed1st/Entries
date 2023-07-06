<script>
  import { currentPath } from "./store";
</script>

<div class="breadcrumbs text-3xl mr-auto">
  <ul>
    {#each $currentPath as path}
      <li> {path} </li>
    {/each}
  </ul>
</div>
