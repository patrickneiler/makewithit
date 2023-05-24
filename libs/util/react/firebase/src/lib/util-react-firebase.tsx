import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCzPYhgx49tIqBZ72s5_EP-xZc_AUJCEEA",
  authDomain: "make-with-it-firebase.firebaseapp.com",
  projectId: "make-with-it-firebase",
  storageBucket: "make-with-it-firebase.appspot.com",
  messagingSenderId: "879701475047",
  appId: "1:879701475047:web:465c60407c1019f89fac42",
  measurementId: "G-NG4CNVTWP2"
};

export const app = initializeApp(firebaseConfig);
export const firestore = getFirestore();
export const auth = getAuth();

export const signIn = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    return { user }
  } catch (error: any) {
    return { error: error.message }
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
    return true
  } catch (error: any) {
    return { error: error.message }
  }
};


export default { app, firestore, auth, signIn, logout }