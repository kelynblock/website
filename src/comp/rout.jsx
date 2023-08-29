import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./about";
import Work from "./work";
import Contact from "./contact";
const Rout = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default Rout;
