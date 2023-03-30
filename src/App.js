import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Home from "./pages/Home";
import DeuxD from "./pages/DeuxD";
import TroisD from "./pages/TroisD";
import Animations from "./pages/Animations";
import Artworks from "./pages/Artworks";
import About from "./pages/About";
import Realisation from "./pages/Realisations";

function App() {
  const [onOff, setOnOff] = useState(0);
  const [selectedId, setSelectedId] = useState(null);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              onOff={onOff}
              setOnOff={setOnOff}
              selectedId={selectedId}
              setSelectedId={setSelectedId}
            ></Home>
          }
        ></Route>
        <Route
          path="/2d"
          element={<DeuxD onOff={onOff} setOnOff={setOnOff}></DeuxD>}
        ></Route>
        <Route
          path="/3d"
          element={<TroisD onOff={onOff} setOnOff={setOnOff}></TroisD>}
        ></Route>
        <Route
          path="/animations"
          element={<Animations onOff={onOff} setOnOff={setOnOff}></Animations>}
        ></Route>
        <Route
          path="/artworks"
          element={<Artworks onOff={onOff} setOnOff={setOnOff}></Artworks>}
        ></Route>
        <Route
          path="/about"
          element={<About onOff={onOff} setOnOff={setOnOff}></About>}
        ></Route>
        <Route
          path="/realisations"
          element={
            <Realisation onOff={onOff} setOnOff={setOnOff}></Realisation>
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
