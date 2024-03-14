import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAMLVT4Lj001uLR_50Jrb7GZLYja5y791E",
  authDomain: "shoppinglist-b16ff.firebaseapp.com",
  databaseURL:
    "https://shoppinglist-b16ff-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "shoppinglist-b16ff",
  storageBucket: "shoppinglist-b16ff.appspot.com",
  messagingSenderId: "222077516885",
  appId: "1:222077516885:web:b06e1506c99a4d8c4868dc",
  measurementId: "G-Z1GJXQTTN0",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);

export { db, auth };
