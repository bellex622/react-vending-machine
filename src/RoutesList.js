import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Chips from "./Chips";
import Coke from "./Coke";
import CandyBar from "./CandyBar";
import Home from "./Home";
import Snacks from "./Snacks";

function RoutesList() {
  return (
    <Routes>
      <Route path="/snacks/:name" element={<Snacks />} />
    </Routes>
  );
}

export default RoutesList;