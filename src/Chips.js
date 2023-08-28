import React from "react";
import { Link } from "react-router-dom";

/** Render chips info from the link on homepage with a link to go
 * back to homepage.
*/
function Chips() {

  return (

    <div className="Chips">
      <h1>Chips</h1>
      <Link to="/">Home</Link>
    </div>

  );

}

export default Chips;