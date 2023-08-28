import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Chips from "./Chips";
import Coke from "./Coke";
import CandyBar from "./CandyBar";
import Home from "./Home";

function RoutesList() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chips" element={<Chips />} />
      <Route path="/coke" element={<Coke />} />
      <Route path="/candy-bars" element={<CandyBar />} />

    </Routes>
  );
}

export default RoutesList;