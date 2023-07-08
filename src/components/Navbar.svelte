<script>
  import { navigate } from "svelte-routing";
  import Logout from "../assets/Logout.svelte";
  import { auth } from "../lib/firebase";
  import { signOut } from "firebase/auth";
  import DarkMode from "./DarkMode.svelte";
  import Breadcrumbs from "../lib/Breadcrumbs.svelte";
  import BackBtn from "../lib/BackBtn.svelte";
  function logout() {
    signOut(auth);
    navigate("authenticate");
  }
</script>

<nav class="flex gap-2 px-5 py-3 bg-base-200">
  <BackBtn />
  <Breadcrumbs />
  <DarkMode />
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div on:click={logout} class="tooltip tooltip-left" data-tip="Logout">
    <Logout />
  </div>
</nav>
