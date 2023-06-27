import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
//set up configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIb18Hzo6JMA8JPw7EWyJK9AxEJ1gogBY",
  authDomain: "entries-7ee81.firebaseapp.com",
  projectId: "entries-7ee81",
  storageBucket: "entries-7ee81.appspot.com",
  messagingSenderId: "729556529976",
  appId: "1:729556529976:web:c46de01628d672808947cd",
  measurementId: "G-S4CSZ7TX8T"
};
//initialize firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
