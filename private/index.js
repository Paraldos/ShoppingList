import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { db } from "./firebase/firebase.js";
import { ref, get } from "firebase/database";
import Navbar from "./components/navbar";

const App = () => {
  return (
    <div>
      <Navbar />
    </div>
  );
};

const root = document.getElementById("root");
createRoot(root).render(<App />);
