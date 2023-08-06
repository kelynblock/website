import React from "react";
import Home1 from "./comp/Home1.jsx";
import Nav from "./comp/Nav";
import { BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Home1 />
      </BrowserRouter>
    </div>
  );
};

export default App;
