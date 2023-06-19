<script>
  import {Router, navigate, Route} from "svelte-routing";
  import { user } from "./lib/store";
  import Authentication from "./features/authentication/Authentication.svelte";
  import Notes from "./features/notes/Notes.svelte";
  import Read from "./features/notes/components/Read.svelte";
  import Create from "./features/notes/components/Create.svelte";
  $: {
    if($user) navigate("/notes");
    else navigate("/authenticate");
  }
</script>
<Router>
{#if $user}
<Route path="/notes/read/:id" let:params>
  <Read id={params.id} />
</Route>
<Route path="/notes/create" component={Create} />
<Route path="/notes" component={Notes} />
{:else}
  <Route path="/authenticate" component={Authentication} />
{/if}
</Router>
