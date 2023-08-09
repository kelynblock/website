import React from "react";
import Home1 from "./comp/Home1.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home1 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
