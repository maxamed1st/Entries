<script>
  import { Router, navigate, Route } from "svelte-routing";
  import { user, loading } from "./lib/store";
  import Authentication from "./features/authentication/Authentication.svelte";
  import Notes from "./features/notes/Notes.svelte";
  import Read from "./features/notes/components/Read.svelte";
  import Create from "./features/notes/components/Create.svelte";
  import Folders from "./features/folders/Folders.svelte";

  const path = window.location.pathname;
  $: if (!$loading && path == "/") {
    if ($user) navigate("/folders");
    else navigate("/authenticate");
  }
</script>

{#if $loading}
  loading..
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
</Router>
