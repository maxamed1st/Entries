<script>
  import { currentPath } from "./store";
</script>

<div class="breadcrumbs flex items-center text-lg font-montserrat mr-auto">
  <ul>
    {#each $currentPath as path}
      <li> {path} </li>
    {/each}
  </ul>
</div>
