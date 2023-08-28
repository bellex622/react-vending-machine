import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Snacks from "./Snacks";

const defaultSnacks = ["chips", "coke", "candy-bars"];

function VendingMachine({ snacks = defaultSnacks }) {


  return (
    <div>
      <h1>Vending Machine</h1>
      <ul>
        {snacks.map(snack => (
          <li key={snack}>
            <Link to={`/snacks/${snack}`}>Show me {snack}!</Link>
          </li>
        ))}
      </ul>
    </div>
  );



}



export default VendingMachine;