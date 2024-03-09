import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import Navbar from "./components/navbar";
import { db } from "./firebase.js";
import { ref, get } from "firebase/database";

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
      <p>Hello World!</p>
    </div>
  );
};

const root = document.getElementById("root");
createRoot(root).render(<App />);
