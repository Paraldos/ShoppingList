import React, { useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { get, ref } from "firebase/database";
import { db, auth } from "../firebase/firebase.js";
import firebaseAPI from "../firebase/firebaseAPI.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightToBracket,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

const SignIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const provider = new GoogleAuthProvider();

  onAuthStateChanged(auth, (user) => {
    setIsLoggedIn(!!user);
    firebaseAPI.setCurrentUser(user);
  });

  const clickListener = () => {
    isLoggedIn ? logOut() : logIn();
  };

  function logIn() {
    signInWithPopup(auth, provider)
      .then(async (result) => {
        const user = result.user;
        const userRef = ref(db, `users/${user.uid}`);
        const snapshot = await get(userRef);
        if (!snapshot.exists()) {
          firebaseAPI.addUser(user.uid, user.displayName);
          console.log(`User ${user.displayName} added to the database.`);
        } else {
          console.log(`User ${user.displayName} logged in successfully.`);
        }
      })
      .catch((error) => displayError(error));
  }

  function logOut() {
    signOut(auth)
      .then(() => console.log("User logged out successfully."))
      .catch((error) => displayError(error));
  }

  function displayError(error) {
    console.error("An error occurred during login: ", error.message);
  }

  return (
    <button className="navbar__nav-element" onClick={clickListener}>
      <FontAwesomeIcon icon={isLoggedIn ? faCircleXmark : faRightToBracket} />
    </button>
  );
};

export default SignIn;
