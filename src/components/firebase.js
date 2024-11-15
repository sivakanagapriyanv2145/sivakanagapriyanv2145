
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";  
import { getFirestore } from "firebase/firestore";  


const firebaseConfig = {
  apiKey: "AIzaSyBwF1kBDk0WPNEMsG9Ea1fTJyAkUh_yrEE",
  authDomain: "nirfit-57bc7.firebaseapp.com",
  projectId: "nirfit-57bc7",
  storageBucket: "nirfit-57bc7.firebasestorage.app",
  messagingSenderId: "442524026558",
  appId: "1:442524026558:web:1f3c8cd5382a563aba40ef"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);  
export const firestore = getFirestore(app); 
export const db = getFirestore(app);