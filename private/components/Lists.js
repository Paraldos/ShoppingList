import React from "react";
import firebaseAPI from "../firebase/firebaseAPI.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Lists = () => {
  const clickListener = () => {
    firebaseAPI.addList(firebaseAPI.getCurrentUser().uid);
  };

  return (
    <div className="lists">
      <button className="lists__add-new-btn" onClick={clickListener}>
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
};

export default Lists;
