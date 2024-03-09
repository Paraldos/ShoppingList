import React from "react";
import { createRoot } from "react-dom/client";
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
