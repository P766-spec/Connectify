
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
 
const firebaseConfig = {
  apiKey: "AIzaSyCGu3SgaghE-F3WzIO49782_UmpFS-8jsc",
  authDomain: "connectify-e9f9d.firebaseapp.com",
  projectId: "connectify-e9f9d",
  storageBucket: "connectify-e9f9d.appspot.com",
  messagingSenderId: "636583370003",
  appId: "1:636583370003:web:cd05d770eed01301f98ee6",
  measurementId: "G-PQJLRQ8ZQZ"
};


 export const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app);
 export const auth = getAuth(app);
 export const storage = getStorage(app);

