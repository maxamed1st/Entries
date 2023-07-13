<script>
  import Logout from "../lib/Logout.svelte";
  import DarkMode from "./DarkMode.svelte";
  import Breadcrumbs from "../lib/Breadcrumbs.svelte";
  import BackBtn from "../lib/BackBtn.svelte";
  import Profile from "../assets/Profile.svelte";
  import { user } from "../lib/store";

</script>

<nav class="flex gap-2 px-5 py-3 bg-base-200">
  <BackBtn />
  <Breadcrumbs />
  <div class="dropdown">
    <button> <Profile /> </button>
    <ul
      class="dropdown-content z-[1] w-52 -translate-x-[165px] translate-y-3 bg-base-200"
    >
      <li class="flex"><DarkMode /></li>
      <li class:hidden={!$user}>
        <Logout />
      </li>
    </ul>
  </div>
</nav>
