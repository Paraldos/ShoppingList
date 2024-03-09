import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import SignIn from "./SignIn";

const Navbar = () => {
  return (
    <nav className="navbar">
      <SignIn />
      <div className="navbar__nav-element">
        <FontAwesomeIcon icon={faHome} />
      </div>
    </nav>
  );
};

export default Navbar;
