import React from "react";
import { Link } from "react-router-dom";



/** Homepage for vending machine.
 * Display links to individual snack page.
*/
function VendingMachine() {

  return (
    <div className="VendingMachine">
      <h1>Vending Machine</h1>
      <ul>
        <li><Link to="/chips">Chips</Link></li>
        <li><Link to="/coke">Coke</Link></li>
        <li><Link to="/candy-bar">Candy Bar</Link></li>
      </ul>
    </div>
  );

}


export default VendingMachine;