<script>
  import { auth } from "./lib/firebase";
  import { user } from "./lib/store";
  import Index from "./features/authentication/Index.svelte";
  import { signOut } from "firebase/auth";
function logout() {
  if($user) {
    signOut(auth);
    console.log("user signed out");
  } else {
    console.log("No user logged in");
  }
}
</script>
<main class="grid grid-cols-2 gap-2">
  <Index />
  <button on:click={logout} class="w-full mx-auto hover:text-2xl"> logout </button>
  {#if $user}
  {$user.email}
  {:else}
  no user logged in currently
  {/if}
</main>
