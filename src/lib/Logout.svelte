<script>
  import { signOut } from "firebase/auth";
  import { navigate } from "svelte-routing";
  import { auth } from "./firebase";

  function logOut() {
    signOut(auth);
    navigate("authenticate");
  }
</script>

<div class="flex w-full gap-1 pl-2 group max-w-max">
  <button on:click={logOut}>
    <svg
      viewBox="0 0 384.971 384.971"
      xmlns="http://www.w3.org/2000/svg"
      class="fill-current group-hover:fill-accent w-6 h-6 cursor-pointer"
    >
      <g>
        <path
          d="M180.455,360.91H24.061V24.061h156.394c6.641,0,12.03-5.39,12.03-12.03s-5.39-12.03-12.03-12.03H12.03
      C5.39,0.001,0,5.39,0,12.031V372.94c0,6.641,5.39,12.03,12.03,12.03h168.424c6.641,0,12.03-5.39,12.03-12.03
      C192.485,366.299,187.095,360.91,180.455,360.91z"
        />
        <path
          d="M381.481,184.088l-83.009-84.2c-4.704-4.752-12.319-4.74-17.011,0c-4.704,4.74-4.704,12.439,0,17.179l62.558,63.46H96.279
      c-6.641,0-12.03,5.438-12.03,12.151c0,6.713,5.39,12.151,12.03,12.151h247.74l-62.558,63.46c-4.704,4.752-4.704,12.439,0,17.179
      c4.704,4.752,12.319,4.752,17.011,0l82.997-84.2C386.113,196.588,386.161,188.756,381.481,184.088z"
        />
      </g>
    </svg>
  </button>
  <button on:click={logOut} class="text-2xl pl-2 group-hover:text-accent">Log out</button>
</div>
