<script>
  import {
    createUserWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
  } from "firebase/auth";
  import { auth } from "../../../lib/firebase";
  import { user } from "../../../lib/store";
  import GoogleIcon from "../../../assets/GoogleIcon.svelte";
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
  async function handleSingUpWithGoogle() {
    try {
      //Setup auth provider
      const provider = new GoogleAuthProvider();
      provider.addScope("profile");
      provider.addScope("email");
      //sign up with a popup
      await signInWithPopup(auth, provider);
    } catch (err) {
        throw err;
    }
  }
</script>

<div class="flex flex-col gap-2 items-center m-5">
  <form
    on:submit|preventDefault={handleSingUp}
    class="flex flex-col gap-2 items-center"
  >
    <label for="username"> username </label>
    <input
      type="text"
      id="username"
      name="username"
      bind:value={username}
      required
      class="border w-48"
    />

    <label for="email"> Email </label>
    <input
      type="text"
      id="email"
      name="username"
      bind:value={email}
      required
      class="border w-48"
    />

    <label for="password"> Password </label>
    <input
      type="password"
      id="password"
      name="password"
      bind:value={password}
      required
      class="border w-48"
    />

    <button
      type="submit"
      class="border bg-blue-600 text-white hover:bg-blue-500 w-24 rounded-lg"
    >
      signup
    </button>
  </form>
  <div class=" h-16 flex gap-4">
    <button on:click={handleSingUpWithGoogle} class="w-5 h-5">
      <GoogleIcon />
    </button>
    <span> login with google </span>
  </div>
</div>

<style>
  input {
    border: 1px, solid, black;
  }
</style>
