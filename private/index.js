import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { db } from "./firebase/firebase.js";
import { ref, get } from "firebase/database";
import Navbar from "./components/navbar";
import SignIn from "./components/SignIn.js";

const App = () => {
  useEffect(() => {
    const testRef = ref(db, "test");
    get(testRef).then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
      } else {
        console.log("No data available");
      }
    });
  }, []);

  return (
    <div>
      <Navbar />
    </div>
  );
};

const root = document.getElementById("root");
createRoot(root).render(<App />);
