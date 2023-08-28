import React from "react";
import { Route, Routes } from "react-router-dom";
import Chips from "./Chips";
import Coke from "./Coke";
import CandyBar from "./CandyBar";
import VendingMachine from "./VendingMachine";

/** Render from the app.
 * Define the endpoints for homepage and snacks.
*/
function RoutesList() {
  return (
    <Routes>
      <Route path="/" element={<VendingMachine />} />
      <Route path="/chips" element={<Chips />} />
      <Route path="/coke" element={<Coke />} />
      <Route path="/candy-bar" element={<CandyBar />} />
      <Route path="*" element={<VendingMachine />} />
    </Routes>
  );
}

export default RoutesList;