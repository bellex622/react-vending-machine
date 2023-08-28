import React from "react";
import { Link,useNavigate } from "react-router-dom";

function CandyBar(){

  return (
    <div>
      <h1>Candy Bars</h1>
      <Link to="/">Home</Link>
    </div>
  );

}

export default CandyBar;