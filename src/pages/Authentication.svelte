<script>
  import Login from "../features/authentication/Login.svelte";
  import Register from "../features/authentication/Register.svelte";
</script>

<main
  class="grid place-content-center sm:grid-cols-2 w-4/5 mx-auto sm:mt-10 h-full p-5 gap-10"
>
  <div>
    <Login />
  </div>
  <div>
    <Register />
  </div>
</main>
