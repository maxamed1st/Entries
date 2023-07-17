<script>
  import { deleteUser } from "firebase/auth";
  import { auth } from "./firebase";

  let modal;

  const showModal = () => modal.showModal();

  const closeModal = () => modal.close()

  async function delAccount() {
    //delete user
    deleteUser(auth.currentUser);
  }
</script>

<div class="flex w-full gap-2 pl-2">
  <button on:click={showModal}> ❌ </button>
  <button
    on:click={showModal}
    class="pl-2 text-xl text-warning hover:text-error">Delete Account</button
  >
</div>

<dialog bind:this={modal} class="modal">
  <form method="dialog" class="modal-box gap-2">
    <button on:click={closeModal} class="btn btn-sm btn-circle btn-ghost absolute top-1 right-1"
      >✕</button
    >
    Are you sure you want to delete your account?
    <div class="text-error">This action can not be undone!</div>
      <button
        on:click={delAccount}
        class="modal-action btn text-warning hover:text-error flex m-0 ml-auto">Yes, i'm sure!</button
      >
  </form>
</dialog>
