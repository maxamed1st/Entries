import { readable, writable } from "svelte/store";
import { auth, db } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { collection, getDocs, addDoc, setDoc, doc } from "firebase/firestore";
//loading state to indicate if $user and $userCol has been correctly populated
export const loading = writable(true);
//set up store to hold the current folders id
export const currentFolder = writable("default");
//set up a global uid to get the collection of the current user
let uid;
export const user = readable(null, set => {
  //set store to user everytime user logs in or out
  const unsubscribe = onAuthStateChanged(auth, async user => {
    //loading stage
    loading.set(true);
    //set user data to user store
    set(user);
    //update uid
    uid = user ? user.uid : null;
    //initialize userCol
    await userCol.init();
    //exit loading state
    loading.set(false);
  });
  return unsubscribe;
});

function userCollection() {
  //set up writable store
  const { subscribe, set, update } = writable([]);
  async function getData() {
    //Get all documents in the users collection
    const snapshot = await getDocs(collection(db, uid));
    const data = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))
    return data;
  }
  async function createData(title, content, folder) {
    try {
      //add new data to the collection
      const docRef = await addDoc(collection(db, uid), { title, content, folder });
      //update the store
      update(data => [...data, { id: docRef.id, title, content, folder }])
    } catch (err) {
      if (!uid) throw new Error("must be logged in to use this feature")
      throw err;
    }
  }
  async function createFolder(folder) {
    //get a reference to the folders document
    const folderRef = doc(db, uid, "folders");
    //create a new folder as a field key
    await setDoc(folderRef, { [folder]: folder }, { merge: true });
    //update the store
    update(data => {
      //find the index for "folders"
      const index = data?.findIndex(item => item.id == "folders");
      //update the item if the index exists otherwise re initilize the store
      (index !== -1) ? data[index] = { ...data[index], [folder]: folder } : init();
      return data;
    });
  }
  //initially populate the store with the user collection
  const init = () => {
    if (!uid) return set([]);
    return getData().then(data => set(data));
  }
  return { subscribe, createData, init, createFolder };
}
export const userCol = userCollection();
