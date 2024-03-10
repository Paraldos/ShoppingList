import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Lists = () => {
  return (
    <div className="lists">
      <h1>Lists</h1>
      <button>
        Add New List <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
};

export default Lists;
