import React, { useState } from "react";
import { Link } from "react-router-dom";
import VendingMachine from "./VendingMachine";

function Home() {

  return (

    <div>
      <h1>Vending Machine</h1>
      <VendingMachine />
    </div>

  );

}

export default Home;