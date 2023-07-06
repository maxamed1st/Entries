<script>
  import Loading from './lib/Loading.svelte';
  import { Router, navigate, Route } from "svelte-routing";
  import { user, loading } from "./lib/store";
  import Authentication from "./pages/Authentication.svelte";
  import Folders from "./pages/Folders.svelte";
  import Entries from "./pages/Entries.svelte";
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

<Loading />
<Router>
  {#if $user}
    <Route path="/entries" component={Entries} />
    <Route path="/folders" component={Folders} />
  {:else}
    <Route path="/authenticate" component={Authentication} />
  {/if}
<Route component={ForbiddenOrNotFound} />
</Router>
