import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Lists = () => {
  return (
    <div className="lists">
      <button className="lists__add-new-btn">
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
};

export default Lists;
