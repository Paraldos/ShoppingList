import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { db } from "./firebase/firebase.js";
import { ref, get } from "firebase/database";
import Navbar from "./components/navbar";
import Lists from "./components/Lists.js";

const App = () => {
  return (
    <div>
      <Lists />
      <Navbar />
    </div>
  );
};

const root = document.getElementById("root");
createRoot(root).render(<App />);
