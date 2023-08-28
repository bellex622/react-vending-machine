import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Snacks from "./Snacks";

const defaultSnacks = ["chips", "coke", "candy-bars"];

function VendingMachine({ snacks = defaultSnacks }) {

  const [snack, setSnack] = useState("");

  function handleChange(evt) {
    setSnack(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    Navigate(`/snacks/{snack}`);
  }

  return (
    <div>
      <h1>Vending Machine</h1>
      <ul>
        {snacks.map(snack => (
          <form key={snack} value={snack} onChange={handleChange} onSubmit={handleSubmit} >
            <button>Get {snack}!</button>
          </form>
        ))}
      </ul>
    </div>
  );



}



export default VendingMachine;