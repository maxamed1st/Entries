<script>
  import { Router, navigate, Route } from "svelte-routing";
  import { user, loading } from "./lib/store";
  import Authentication from "./features/authentication/Authentication.svelte";
  import Notes from "./features/notes/Notes.svelte";
  import Read from "./features/notes/components/Read.svelte";
  import Create from "./features/notes/components/Create.svelte";
  import Folders from "./features/folders/Folders.svelte";
  import ForbiddenOrNotFound from "./components/ForbiddenOrNotFound.svelte";
  import { onMount } from "svelte";

  onMount(async () => {
    //make sure data is loaded correctly
    if ($loading) await loading.isLoading();
    //check if current path is the base url
    const path = window.location.pathname;
    if (path == "/" || path == "/authenticate") {
      //Redirect based on authentication status
      if ($user) navigate("/folders");
      else navigate("/authenticate");
    }
  });
</script>

{#if $loading}
  <div class="grid place-content-center h-[100vh]">
    <span class="loading w-52" />
  </div>
{/if}
<Router>
  {#if $user}
    <Route path="/notes/read/:id" let:params>
      <Read id={params.id} />
    </Route>
    <Route path="/notes/create" component={Create} />
    <Route path="/notes" component={Notes} />
    <Route path="/folders" component={Folders} />
  {:else}
    <Route path="/authenticate" component={Authentication} />
  {/if}
<Route component={ForbiddenOrNotFound} />
</Router>
