<script>
  import { navigate } from "svelte-routing";
  import Logout from "../assets/Logout.svelte";
  import { auth } from "../lib/firebase";
  import { signOut } from "firebase/auth";
  function logout() {
    signOut(auth);
    navigate("authenticate");
  }
</script>
<nav class="flex justify-end px-4 py-3 cursor-pointer">
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div on:click={logout} class="tooltip tooltip-left" data-tip="Logout"> <Logout /> </div>
</nav>