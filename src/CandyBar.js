import React from "react";
import { Link,useNavigate } from "react-router-dom";

/** Render candy bar info from the link on homepage with a link to go
 * back to homepage.
*/
function CandyBar(){

  return (
    <div className="CandyBar">
      <h1>Candy Bar</h1>
      <Link to="/">Home</Link>
    </div>
  );

}

export default CandyBar;