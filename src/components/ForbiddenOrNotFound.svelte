<script>
  import { user } from "../lib/store";
  import { navigate } from "svelte-routing";
  //get current path
  const path = window.location.pathname;
  //array of paths that only authenticated users can enter
  const restrictedPaths = ["/folders", "/notes", "/notes/create"];
</script>

{#if (!$user && (restrictedPaths.includes(path)) || path.startsWith("/notes/read"))}
  <main class="grid place-content-center h-[100vh] gap-2">
    <h1 class="text-error text-center text-9xl">403 Forbidden</h1>
    <p class="text-warning text-xl text-center">Unauthorized access! Please Login</p>
    <button on:click={(e) => navigate("/authenticate")} class="btn btn-accent w-64 justify-self-center"
      >Log in</button
    >
  </main>
{:else}
  <main class="grid place-content-center h-[100vh]">
    <h1 class="text-error text-center text-9xl">404 Not Found</h1>
    <p class="text-warning text-xl text-center">
      The page you are looking for seems to be none existent 🙄...
    </p>
  </main>
{/if}
