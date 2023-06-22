<script>
  import { createUserWithEmailAndPassword } from "firebase/auth";
  import { auth } from "../../../lib/firebase";
  let username = "";
  let email = "";
  let password = "";
  const handleSingUp = async (e) => {
    try {
      //register and sign in user with email and password
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      throw err;
    } finally {
      //reset form
      username = "";
      email = "";
      password = "";
    }
  };
</script>

<form on:submit|preventDefault={handleSingUp} class="form-control">
  <label for="username" class="label"> Username </label>
  <input
    type="text"
    id="username"
    name="username"
    bind:value={username}
    required
    class="input bg-neutral w-full"
  />

  <label for="email" class="label"> Email </label>
  <input
    type="text"
    id="email"
    name="username"
    bind:value={email}
    required
    class="input bg-neutral w-full"
  />

  <label for="password" class="label"> Password </label>
  <input
    type="password"
    id="password"
    name="password"
    bind:value={password}
    required
    class="input bg-neutral w-full"
  />

  <button type="submit" class="btn btn-accent mt-4"> signup </button>
</form>

<style>
  input {
    border: 1px, solid, black;
  }
</style>
