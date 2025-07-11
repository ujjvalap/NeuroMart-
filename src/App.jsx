import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      {/* <Routes>
        <Route path="/"  exact={true} element={<Home />} />
      </Routes> */}
    </BrowserRouter>
  );
};

export default App;
