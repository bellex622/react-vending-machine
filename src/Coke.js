import React from "react";
import { Link } from "react-router-dom";


/** Render coke info from the link on homepage with a link to go
 * back to homepage.
*/
function Coke() {

  return (
    <div className="Coke">
      <h1>Coke</h1>
      <Link to="/">Home</Link>
    </div>
  );

}


export default Coke;