import React, { useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebase.js";
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
  });

  const clickListener = () => {
    isLoggedIn ? logOut() : logIn();
  };

  function logIn() {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(`User ${user.displayName} logged in successfully.`);
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
    <div className="navbar__nav-element" onClick={clickListener}>
      <FontAwesomeIcon icon={isLoggedIn ? faCircleXmark : faRightToBracket} />
    </div>
  );
};

export default SignIn;
