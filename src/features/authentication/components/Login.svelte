<script>
  import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
  import { user } from "../../../lib/store";
  import { auth } from "../../../lib/firebase";
  import GoogleIcon from "../../../assets/GoogleIcon.svelte";

  let email = "";
  let password = "";
  function signIn() {
    try {
      signInWithEmailAndPassword(auth, email, password);
      console.log($user);
    } catch(err) {
      console.log(err)
    } finally {
    //reset form
    email = "";
    password = "";
    }
  }
  async function signInWithGoogle() {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      console.log($user);
    } catch(err) {
      console.log(err)
    }
  }
</script>
<div class="flex flex-col gap-2 items-center m-5">
<form on:submit|preventDefault={signIn} class="flex flex-col gap-2 items-center ">
  <label for="email"> Email </label>
  <input type=text id=email name=username bind:value={email} required 
    class="border w-48"/>

  <label for="password" > Password </label>
  <input type="password" id=password name=password bind:value={password} required 
  class="border w-48"/>

  <button type=submit class="border bg-blue-600 text-white hover:bg-blue-500 w-24 rounded-lg"> login </button>
</form>
<div class=" h-16 flex gap-4">
  <button on:click={signInWithGoogle} class="w-5 h-5"> <GoogleIcon /> </button>
  <span> login with google </span> 
</div>
</div>
