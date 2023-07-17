<script>
  import {
    signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
  } from "firebase/auth";
  import { auth } from "../../lib/firebase";
  import GoogleIcon from "../../assets/GoogleIcon.svelte";
  import { navigate } from "svelte-routing";

  let email = "";
  let password = "";
  async function signIn() {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      //redirect user after successful sign
      navigate("/folders")
      //reset form
      email = "";
      password = "";
    } catch (err) {
      throw err;
    }
  }
  async function signInWithGoogle() {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      //redirect user after successful sign
      navigate("/folders")
    } catch (err) {
      throw err;
    }
  }
</script>

<form on:submit|preventDefault={signIn} class="form-control">
  <label for="email" class="label"> Email </label>
  <input
    type="text"
    id="login-email"
    name="login-email"
    bind:value={email}
    required
    class="input bg-neutral text-neutral-content w-full"
  />

  <label for="password" class="label"> Password </label>
  <input
    type="password"
    id="login-password"
    name="login-password"
    bind:value={password}
    required
    class="input bg-neutral text-neutral-content w-full"
  />

  <button type="submit" class="btn btn-accent my-4"> login </button>
</form>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
  on:click={signInWithGoogle}
  class="flex w-full h-24 p-3 gap-5 rounded-lg cursor-pointer bg-neutral text-neutral-content hover:bg-neutral-focus"
>
  <button class="w-7 h-7 self-center"> <GoogleIcon /> </button>
  <span class="border" />
  <span class="pl-2 self-center text-2xl"> Continue with Google </span>
</div>
