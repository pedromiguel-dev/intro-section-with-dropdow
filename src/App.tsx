import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./modules/home";

// Just having fun with React Router.
// This is the root component of the app.
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<p>Eita bbs</p>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
