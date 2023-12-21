import React from "react";
import QrCode from "./pages/qr-code/QrCode";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import NotFound from "./pages/notfound/NotFound";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/qr-code" element={<QrCode />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
