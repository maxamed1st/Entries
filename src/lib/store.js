import { readable } from "svelte/store";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
export const user = readable(null, set => {
  //set store to user everytime user logs in or out
  const unsubscribe = onAuthStateChanged(auth, user => set(user));
  return unsubscribe;
});
