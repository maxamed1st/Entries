import { readable, writable } from "svelte/store";
import { auth, db } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { collection, getDocs, addDoc } from "firebase/firestore";
//set up a global uid to get the collection of the current user
let uid;
export const user = readable(null, set => {
  //set store to user everytime user logs in or out
  const unsubscribe = onAuthStateChanged(auth, user => {
    //set user data to user store
    set(user);
    //update uid
    uid = user ? user.uid : null;
    //initialize userCol
    userCol.init();
  });
  return unsubscribe;
});

function userCollection() {
  //set up writable store
  const { subscribe, set, update } = writable([]);
  async function getData() {
    //Get all documents in the users collection
    const snapshot = await getDocs(collection(db, uid));
    const data = [...snapshot.docs].map(doc => doc.data());
    return data;
  }
  async function createData(title, content) {
    try {
      //add new data to the collection
      await addDoc(collection(db, uid), { title, content });
      //update the store
      init();
    } catch (err) {
      if (!uid) throw new Error("must be logged in to use this feature")
      throw err;
    }
  }
  //initially populate the store with the user collection
  const init = () => {
    if (!uid) return set([]);
    return getData().then(data => set(data));
  }
  return { subscribe, createData, init };
}
export const userCol = userCollection();
