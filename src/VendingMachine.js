import React from "react";
import { Link } from "react-router-dom";

function VendingMachine() {
  return (
    <ul>
      <li><Link to="/chips">Chips</Link></li>
      <li><Link to="/coke">Coke</Link></li>
      <li><Link to="/candy-bars">Candy Bars</Link></li>
    </ul>
  );



}



export default VendingMachine;