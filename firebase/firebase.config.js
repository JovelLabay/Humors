// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCE8ClpYb8iq-FL6zVXZIJ-guMFkPpA_ao",
  authDomain: "humors-3c49b.firebaseapp.com",
  projectId: "humors-3c49b",
  storageBucket: "humors-3c49b.appspot.com",
  messagingSenderId: "27982602254",
  appId: "1:27982602254:web:4d324dda5500bc71b15c5f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getFirestore(app);
export const authentication = getAuth(app);
